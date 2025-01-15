import{test} from '@playwright/test'

test(`This test is to create a new lead in salesforce appln`, async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");

    const username = page.locator("#username");
    const password = page.locator("#password");
    const submitBtn = page.locator(".decorativeSubmit");

    await username.fill("demosalesmanager");
    //await page.fill("#username","demosalesmanager");
    await password.fill("crmsfa");
    //await page.fill("#password","crmsfa");
    submitBtn.click();
    //page.click(".decorativeSubmit");

    //Click CRMSFA
    await page.locator("text=CRM/SFA").click;

    //Click Leads
    await page.click("//a[text()='Leads']");
    //await page.getByRole('link',{name:'Leads'}).click();

    //Click create Lead
    await page.locator("//a[text()='Create Lead']");

})