import { expect, test } from "@playwright/test";
import path from "path";

test(`This test is to check for file upload`, async({page})=>{

    await page.goto("https://leafground.com/file.xhtml");
    // directly upload the file to the location  
    await page.locator(".card").filter({has:page.getByText("Basic Upload")}).locator("input[type='file']")
    .setInputFiles([path.join(__dirname,"test.pdf")]);

    expect(page.locator(".card").filter({has:page.getByText("Basic Upload")}).locator(".ui-fileupload-filename"))
    .toContainText("test.pdf");

    await page.waitForTimeout(3000);
})

test.only(`Test to upload files using file chooser`, async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePromise = page.waitForEvent('filechooser');
    page.click("#drag-drop-upload");
    const filechooser = await filePromise;
    filechooser.setFiles([path.join(__dirname,"test.pdf")])

})