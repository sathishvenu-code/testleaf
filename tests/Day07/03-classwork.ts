import { chromium, firefox } from "@playwright/test";
import { log } from "console";

type supportBrowsers = "Chromium" | 'Firefox';
type browserVersion = 127|128;


type browserProfile = {
    browserName : supportBrowsers,
    version : browserVersion
}

let chromeBrowser : browserProfile = {
    browserName : "Chromium",
    version : 127
}

let firefoxBrowser : browserProfile = {
    browserName : "Firefox",
    version : 128
}

function launchChromeBrowser(browserInfo:browserProfile):void {

    if (browserInfo.browserName === "Chromium" && browserInfo.version === 127) {
        console.log("Launch Chrome Browser");
        
    }else{
        console.log("Launch Firefox Browser");
    }
    
}

launchChromeBrowser(firefoxBrowser);

