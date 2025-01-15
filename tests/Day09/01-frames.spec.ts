import{test} from '@playwright/test';

test('Test to interact with Frames', async({page}) =>{

    await page.goto("https://www.oneindia.com/");

    // to get all the frames
    const totalFrames = page.frames();
    console.log(totalFrames);

    // to get count of all the frames
    console.log(totalFrames.length);

    // to loop thru each frames  

    for (let frame of totalFrames ) {

        let titleofFrame = await frame.title();
        console.log(`Title of the frame is ${titleofFrame}`);       
        
    } 
    

})

test('Test to handle frame using frame object' , async({page}) =>{

    await page.goto("https://www.leafground.com/frame.xhtml");

    const allFrames = page.frames();

    // interact with iframes using URL
    const frame1 = page.frame({url : "https://www.leafground.com/default.xhtml"});

    //click the button
    frame1?.click("#Click");
    await page.waitForTimeout(2000);

    const frame2 = allFrames[4];
    frame2.click("#Click");
    await page.waitForTimeout(2000);    

})


test.only('Test to interact with frame using frame locator method' , async({page}) =>{

    await page.goto("https://www.leafground.com/frame.xhtml");

    // using frame locator

    let frame3 = page.frameLocator("iframe").first();
    frame3.locator("#Click").click();

    // dealing with frame chains

    let card = page.locator(".card").filter({hasText : " Click Me (Inside Nested frame)"});
    // let frame_one = card.frameLocator("iframe");
    // let frame_two = frame_one.frameLocator("iframe");

    card.frameLocator("iframe").frameLocator("iframe").locator("#Click").click();


})