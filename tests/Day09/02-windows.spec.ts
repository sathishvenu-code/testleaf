import {test} from "@playwright/test";

test('Test the window handles using sequential approach', async({context,page}) =>{

    const page_one = await context.newPage();
    await page.goto("https://www.amazon.in");
    await page_one.goto("https://leafground.com/window.xhtml");
    const page_two = await context.newPage();
    await page_two.goto("https://www.redbus.in");

    // to get the count of total no of pages in the context
    let allPages = context.pages();
    console.log(`Total no of pages in the context is `+allPages.length);

    for (let eachPage of allPages) {

        let title = await eachPage.title();
        console.log(`Title of each page is ${title}`);        
    }

    await allPages[0].bringToFront();   

})