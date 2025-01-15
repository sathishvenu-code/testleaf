import{test} from '@playwright/test'

test(`This test is to work on dropdown`, async({page})=>{

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

    let sourceDropdown = page.locator("#createLeadForm_dataSourceId");
    let marketingDropdown = page.locator("#createLeadForm_marketingCampaignId");

    let sourceCount = await sourceDropdown.count();

    for (let index = 0; index < sourceCount; index++) {
        console.log(sourceDropdown.nth(index).innerText()); 
    }

    //await sourceDropdown.selectOption({value : "Employee"});
    //await marketingDropdown.selectOption({index : 2});



})