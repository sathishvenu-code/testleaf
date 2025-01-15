let browserName = 'Chrome';
let testToRun = "smoke";

function launchBrowser(browser) {

    if (browser === 'Chrome') {

        console.log("Browser to be launched is Chrome");
        
    } else {
        
        console.log("Dont launch anything");
    }
    
}

function runTests(testType) {

    switch (testType) {
        case 'smoke':
            console.log("Run Smoke test");            
            break;

        case 'sanity':
            console.log("Run Sanity test");            
            break;

        case 'regression':
            console.log("Run Regression test");            
            break;
    
        default:
            console.log("Run Smoke test");
            break;
    }
    
}

launchBrowser(browserName);
runTests(testToRun);