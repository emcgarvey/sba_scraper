const puppeteer = require('puppeteer');

async function scrapeMLS(url) {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url)
}

scrapeMLS('https://cheyenne.paragonrels.com/ParagonLS/Default.mvc/Login');