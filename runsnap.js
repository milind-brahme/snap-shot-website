
const fs = require('fs');
const puppeteer = require('puppeteer');



(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://querylight.blogspot.com/p/querylight-overview-query-light-query.html');
    //const image = await page.screenshot();
    await page.screenshot({ path: 'example.png' });

    await browser.close();

    return;

})();
