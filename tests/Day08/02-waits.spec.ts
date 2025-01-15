import{test, expect} from "@playwright/test";

test(`To test how assertion works` , async ({page}) => {

    await page.goto("https://www.leafground.com/waits.xhtml");

    let buttonToClick = page.locator('.card').filter({hasText : 'Wait for Visibility'}).getByRole("button").filter({hasText:"Click"});
    await buttonToClick.click();
    //Assertion
    await expect(page.locator('.card').filter({hasText : 'Wait for Visibility'}).getByRole("button").filter({hasText:"I am here"})).toBeVisible({timeout:10*1000});

})