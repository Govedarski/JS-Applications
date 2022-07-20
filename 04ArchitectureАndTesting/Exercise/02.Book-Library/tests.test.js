const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

let browser, page;

describe('E2E tests', function () {
    this.timeout(10000);
    before(async () => {
        browser = await chromium.launch({headless: false, slowMo: 1000});
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://localhost:63342/HTML-and-CSS/Applications/04Architecture%D0%90ndTesting/Exercise/02.Book-Library/index.html');
        await page.route('**/jsonstore/collections/books', route => route.fulfill({
            body: JSON.stringify({
                '1': {
                    'author': 'T.E.S.T.',
                    'title': 'T.E.S.T.O.V.'
                }, 'd953e5fb-a585-4d6b-92d3-ee90697398a1': {'author': 'Test', 'title': 'TESTOV'}
            }),
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }));

        await page.route('**/jsonstore/collections/books/' + '1', route => route.fulfill({
            body: JSON.stringify({
                'author': 'T.E.S.T.',
                'title': 'T.E.S.T.O.V.'
            }),
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }));
    });
    afterEach(async () => {
        await page.close();
    });

    it('should load all books', async function () {

        await page.click('text=load all books');
        await page.waitForLoadState();
        const result = await page.$$eval('tbody tr', (rows) => rows.map(row => row.textContent));

        expect(result[0]).to.include('T.E.S.T.');
        expect(result[0]).to.include('T.E.S.T.O.V.');
        expect(result[1]).to.include('Test');
        expect(result[1]).to.include('TESTOV');

    });
    it('should add book', async function () {

        await page.fill('[name=title]', 'newT');
        await page.fill('[name=author]', 'newA');
        const [request, _] = await Promise.all([
            page.waitForRequest('**/jsonstore/collections/books'),
            page.click('text=Submit')
        ]);
        const result = request.postDataJSON();
        expect(result.title).to.be.equal('newT');
        expect(result.author).to.be.equal('newA');
    });
    it('should edit book', async function () {
        await page.click('text=load all books');
        await page.waitForLoadState();
        await page.click('text=Edit');

        const title = await page.inputValue('#editForm [name=title]');
        const author = await page.inputValue('#editForm [name=author]');
        expect(title).to.be.equal('T.E.S.T.O.V.');
        expect(author).to.be.equal('T.E.S.T.');

        await page.fill('#editForm [name=title]', title+' Edit')
        await page.fill('#editForm [name=author]', author+' Edit')

        const [request, _] = await Promise.all([
            page.waitForRequest('**/jsonstore/collections/books/**'),
            page.click('text=Save')
        ]);
        const result = request.postDataJSON();
        expect(result.title).to.be.equal(title+' Edit');
        expect(result.author).to.be.equal(author+' Edit');
    });
    it('should delete', async function () {
        await page.click('text=load all books');
        await page.waitForLoadState();
        const [request, _] = await Promise.all([
            page.waitForRequest('**/jsonstore/collections/books/1'),
            page.click('text=Delete'),
            page.on('dialog', dialog => dialog.accept())
        ]);
        expect(request.method()).to.be.equal('DELETE')
    });
});


