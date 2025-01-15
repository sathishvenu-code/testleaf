import { chromium, firefox, test } from "@playwright/test";

test(`Test to launch browser`, async () => {

    //create a browser instance
    //const browser = await chromium.launch({headless : false, channel : "msedge"});
    const browser = await chromium.launch();

    //create a browser context
    const context = await browser.newContext();

    //create a page
    const page = await context.newPage();

    //load the URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //get the url of the page
    console.log(page.url());

    //get title of the page
    let title = await page.title();
    console.log(`Title of the page is ${title}`);

    await page.waitForTimeout(3000);
    

    //closing the resources

    await page.close();
    await context.close();
    await browser.close();
    
})

test.only(`Test to launch firefox`, async () => {

    //create a browser instance
    
    const browser = await firefox.launch();

    //create a browser context
    const context = await browser.newContext();

    //create a page
    const page = await context.newPage();

    //load the URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //get the url of the page
    console.log(page.url());

    //get title of the page
    let title = await page.title();
    console.log(`Title of the page is ${title}`);

    await page.waitForTimeout(3000);

    //closing the resources

    await page.close();
    await context.close();
    await browser.close();
    
})