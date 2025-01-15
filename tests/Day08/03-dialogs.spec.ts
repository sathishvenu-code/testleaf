import { test } from "@playwright/test";

test('This is to test the alerts' , async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");

    let simpleDialog = page.locator("text=Show").first();
    let conformDialog = page.locator(".card").filter({hasText:"(Confirm Dialog)"}).getByRole("button").filter({hasText : "Show"});
    let sweetAlert = page.locator(".card").filter({hasText:"(Sweet Alert (Simple Dialog))"}).locator("//span[text()='Show']");
    await simpleDialog.click({timeout:2000});
    await page.waitForTimeout(3000);

})

test('This is to test the event listeners' , async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");

    let simpleDialog = page.locator("text=Show").first();
    let conformDialog = page.locator(".card").filter({hasText:"(Confirm Dialog)"}).getByRole("button").filter({hasText : "Show"});
    let sweetAlert = page.locator(".card").filter({hasText:"(Sweet Alert (Simple Dialog))"}).locator("//span[text()='Show']");

    // Initiating event listeners
    page.on('dialog' , async dialog =>{

        let message = dialog.message();
        console.log(`The message is ${message}`);
        

    })

    await simpleDialog.click({timeout:2000});
    await page.waitForTimeout(3000);

})