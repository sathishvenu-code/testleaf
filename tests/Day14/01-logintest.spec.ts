import {test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";

test(`Test to login using valid credentials`, async()=>{
    //create an object for login page
    const loginpage = new LoginPage();
    await loginpage.initialize();
    await loginpage.navigateTo("https://login.salesforce.com");
    await loginpage.loginToApp(`sathishvenu@salesforce.com`,`sivakami@23`);
    await loginpage.closeBrowser();

})