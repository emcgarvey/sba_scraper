const puppeteer = require('puppeteer');
const fs = require('fs');
const config = require('./config.json');
async function scrapeMLS(url) 
{
    /*Start puppeteer and create a new page*/
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    
        /*go to paragon login page*/
        await page.goto(url), {waitUntil: 'networkidle0'};
        /*enter username and password*/
        await page.type('#LoginName', config.username, {delay: 30});
        await page.type('#Password', config.password, {delay: 30});

        /* Click the login button*/
        await page.click('#Enter');
        //await page.
        try{
            await page.waitForSelector('.sub-header2-text', { timeout: 1000 });
            await page.click('#Enter');
        }
        catch{
            
            await page.waitForNavigation();
        }
        
        //await page.waitFor(3000);
        //await page.click('#user_menu_name');
        //await page.click('#logoff');
}

scrapeMLS('https://cheyenne.paragonrels.com/ParagonLS/Default.mvc/Login');