import { test } from "@playwright/test";
import dotenv from "dotenv";
import path  from "path";


/**
 * $env:NODE_ENV = "production"
 * npx playwright test filename
 * 
 * set NODE_ENV = production
 * npx playwright test filename
 * 
 */

const environment = process.env.NODE_ENV || 'test';
const envPath = path.join(__dirname,`../../data/${environment}.env`);
dotenv.config({path:envPath})

test(`Test to read the data from dotenv file` , async({page})=>{

    const userName = process.env.SF_USERNAME as string;
    const password = process.env.SF_PASSWORD as string;

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", userName);
    await page.fill("#password", password);
    await page.click("#Login");
    //page.waitForTimeout(5000);
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    

})