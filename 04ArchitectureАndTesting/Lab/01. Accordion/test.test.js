const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

let browser, page;

describe('E2E tests', function () {
    this.timeout(5000)
    before(async () => {
        browser = await chromium.launch();
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://localhost:63342/HTML-and-CSS/Applications/04Architecture%D0%90ndTesting/Lab/01.%20Accordion/index.html')
    });
    afterEach(async () => {
        await page.close();
    });

    it('should loads article titles', async function () {
        await page.waitForSelector('.accordion')
        const content = await page.textContent('#main')

        expect(content).to.contain('Scalable Vector Graphics')
        expect(content).to.contain('Open standard')
        expect(content).to.contain('Unix')
        expect(content).to.contain('ALGOL')
    });
    it('should load content', async function () {
        await page.click('text=More')
        await page.waitForSelector('.accordion p')
        const visible = await page.isVisible('.accordion p')
        expect(visible).to.be.true
    });
    it('should show and hide content', async function () {
        await page.click('text=More')
        await page.waitForSelector('.accordion p')
        const visible = await page.isVisible('.accordion p')
        expect(visible).to.be.true
        await page.click('text=Less')
        const hidden = !(await page.isVisible('.accordion p'))
        expect(hidden).to.be.true
    });
    it('should fill form', function () {
        page.fill('#password', 'peter@abv.bg')
    });
});

