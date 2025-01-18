import { expect,test } from "@playwright/test";
import loginAppData from "../../data/login.json";


loginAppData.forEach(testData => {

    test(`Test to read the static data from json file for ${testData.testTitle}` , async({page})=>{    

        console.log(`Title of the test case is ${testData.testTitle}`);        
        await page.goto("https://login.salesforce.com");
        await page.fill("#username", testData.username);
        await page.fill("#password", testData.password);
        await page.click("#Login");
        //page.waitForTimeout(5000);
        const title = await page.title();
        console.log(`The title of the page is ${title}`);  
        await expect(page).toHaveTitle("Home | Salesforce");      
    
    })
    
});


