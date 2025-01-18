import { chromium,expect, test } from "@playwright/test";

test.use({storageState: "creds/sf_login_storage.json"});
test(`Test to Verify Lead Creation and Conversion to Opportunity`, async () => {
    const firstname = "Sathish";
    const lastname = "Venu";
    const company = "Cognizant";
    const opportunityName = "Mettel"
    const browser = await chromium.launch();
    const context = await browser.newContext();
    await context.tracing.start({screenshots:true, snapshots:true, sources:true});
    const page = await context.newPage();
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "sathishvenu@salesforce.com");
    await page.fill("#password", "sivakami@23");
    await page.click("#Login");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    //await expect(page).toHaveTitle("Home | Salesforce");
    await context.tracing.stop({path:'sf_trace.zip'});
    await context.close();
    await browser.close();
})