import { expect,test } from "@playwright/test";
import loginAppData from "../../data/login.json";
import fs from "fs";
import path from "path";


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

//Reading the dynamically
const loginData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/login.json'), 'utf-8'));

for(const credentials of loginData) {

    test.only(`Test to read the dynamic data using json file ${credentials.testTitle}`,async ({page}) => {
    
        await page.goto("https://login.salesforce.com");
        await page.fill("#username", credentials.username);
        await page.fill("#password", credentials.password);
        await page.click("#Login");
        const title = await page.title();
        console.log(`The title of the page is ${title}`);
        await expect(page).toHaveTitle("Home | Salesforce");
    })

}


