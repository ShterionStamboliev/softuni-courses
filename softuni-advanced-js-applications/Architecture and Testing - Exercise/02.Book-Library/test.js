const { chromium } = require("playwright-chromium");
const { expect } = require("chai");
const { it } = require("mocha");

const host = "http://localhost:5501";
const mock = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0":
{"author":"J.K.Rowling","title":"Harry Potter and the Philosopher's Stone"},
"d953e5fb-a585-4d6b-92d3-ee90697398a1":
{"author":"Svetlin Nakov","title":"C# Fundamentals"}}

describe("Playwright tests", async function () {
  this.timeout(6000);

  let browser;
  let page;

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 1000 });
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    page.close();
  });

  it("load all books", async () => {
    await page.route("**/jsonstore/collections/books", (route, request) => {
        route.fulfill({
            body: JSON.stringify(mock),
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
            },
        });
    });
    await page.goto(host);
    await page.click("text=Load all books");
    await page.waitForSelector("text=Harry potter");
    const data = await page.$$eval("tbody tr", (rows) =>
      rows.map((r) => r.textContent)
    );

    expect(data[0]).to.contains("Harry Potter");
    expect(data[0]).to.contains("Rowling");
    expect(data[1]).to.contains("C# Fundamentals");
    expect(data[1]).to.contains("Nakov");
  });

  it('create book', async () => {
    await page.goto(host);

    await page.fill('input[name=title]', 'Pesho');
    await page.fill('input[name=author]', 'Gladiatora');

    const [request] = await Promise.all([
        page.waitForRequest((request) => request.method() == 'POST'),
        page.click('text=Submit')
    ]);

    const data = JSON.parse(request.postData());
    expect(data.title).to.equal('Pesho');
    expect(data.author).to.equal('Gladiatora');
  });
});
