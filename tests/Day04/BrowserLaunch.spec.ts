import{chromium, test} from '@playwright/test'

test("This test is just to launch the browser" , async()=>{

    const browser = await chromium.launch();

    (await (await browser.newContext()).newPage()).goto("https://www.google.com");

})