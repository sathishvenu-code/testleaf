import { test } from "@playwright/test";

test(`Test to Verify Lead Creation and Conversion to Opportunity`, async ({page}) => {
  
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "sathishvenu@salesforce.com");
    await page.fill("#password", "sivakami@23");
    await page.click("#Login");
    //Get the login details
    await page.context().storageState({path:"creds/sf_login_storage.json"});
})