import { chromium, firefox, test } from "@playwright/test";

test(`Two browser test`, async () => {

    const browser1 = await chromium.launch({channel:"msedge"});
    const browser2 = await firefox.launch();

    const context1 = await browser1.newContext();
    const context2 = await browser2.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto("https://www.redbus.in");
    page1.waitForTimeout(3000);
    console.log(await page1.title());
    console.log(await page1.url());

    await page2.goto("https://www.flipkart.com");
    page2.waitForTimeout(3000);
    console.log(await page2.title());
    console.log(await page2.url());

    
})