import{Browser, BrowserContext,chromium,Page} from 'playwright';

async function performAction(url:string, action : 'screenshot' |'title') : Promise <string|void> {

    const testBrowser : Browser = await chromium.launch ({headless : false});
    const browContext : BrowserContext = await testBrowser.newContext();
    const testPage : Page = await browContext.newPage();
    await testPage.goto(url);
    if (action === "screenshot") {
        let screenshotPath = "screenshot.png";
        await testPage.screenshot({path:screenshotPath});
        await testBrowser.close();
        return `screenshot is saved in ${screenshotPath}`;
    }else if (action === "title") {
        let pageTitle = await testPage.title();
        await testBrowser.close();
        return`Title of the page is ${pageTitle}`; 
        console.log(`Title of the page is ${pageTitle}`);
              
    }
    
}

async function runTest() {

    await performAction("https://www.google.com","title");
    
}

runTest();