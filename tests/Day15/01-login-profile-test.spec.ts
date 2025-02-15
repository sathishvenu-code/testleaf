import { test } from "@playwright/test";
import { profilePage } from "./01-encapsulation";

test(`User can login with valid credentials`, async ({page}) => {
    const profile = new profilePage(page);
    await page.goto("https://login.salesforce.com");
    await profile.doLogin('ranjini.r@testleaf.com', 'Testleaf@543');
})