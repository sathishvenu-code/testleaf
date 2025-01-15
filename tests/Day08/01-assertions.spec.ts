import{test, expect} from "@playwright/test";

test(`To test how assertion works` , async ({page}) => {

    await page.goto("https://www.leafground.com/input.xhtml");

    let nameField = page.getByPlaceholder("Babu Manickam");
    await expect(nameField).toBeEnabled();
    await nameField.fill(`Sathish`);
    await page.waitForTimeout(3000);


    let disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeEnabled();  
    // await disabledTextbox.fill('testvalue');
    // await page.waitForTimeout(3000);

})

test(`Assertion using hard assert`, async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect(appendTextbox).toBeEnabled({timeout:20000});
    await appendTextbox.fill("India");
    await page.waitForTimeout(3000);
})

test.only(`Assertion using soft assert`, async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect.soft(appendTextbox).toBeDisabled();     //assertion fails
    await appendTextbox.fill("India");
    const clearTextbox = page.locator("//input[@value='Can you clear me, please?']");
    await clearTextbox.clear();
    await clearTextbox.fill("Hi");
    await page.waitForTimeout(3000);
})