const {chromium} = require('playwright-chromium');
const {assert, expect} = require('chai');


describe('E2E tests', function () {
    let browser, page;
    this.timeout(10000);

    before(async () => {
        browser = await chromium.launch({headless: false, slowMo: 1000});
        // browser = await chromium.launch();
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://localhost:63342/HTML-and-CSS/Applications/04Architecture%D0%90ndTesting/Exercise/01.Messenger/index.html');
    });
    afterEach(async () => {
        await page.close();
    });

    it('should load', async function () {
        await page.route('**/jsonstore/messenger', route => route.fulfill({
            status: 200,
            body: JSON.stringify({
                '-LxHVtajG3N1sU714pVj': {'author': 'Az', 'content': 'Hello?'},
                '-LxIDxC-GotWtf4eHwV8': {'author': 'Ti', 'content': 'Hi'},
            }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }));
        await page.click('text=refresh');
        await page.waitForLoadState()
        const result = await page.inputValue('#messages')

        expect(result).to.include('Az')
        expect(result).to.include('Ti')
        expect(result).to.include('Hello?')
        expect(result).to.include('Hi')
    });

    it('should send massage', async function () {
        await page.fill('#author', 'Testov')
        await page.fill('#content', 'Test')
        const [request, _] = await Promise.all([
            page.waitForRequest((request) => request.method() === 'POST'),
            page.click('text=Send'),
        ])

        const data = JSON.parse(request.postData())
        expect(data.author).to.be.equal('Testov')
        expect(data.content).to.be.equal('Test')
        await page.click('text=refresh');
        await page.waitForLoadState()
        const result = await page.inputValue('#messages')

        expect(result).to.include('Testov')
        expect(result).to.include('Test')
    });
});
