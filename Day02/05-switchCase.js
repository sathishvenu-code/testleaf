let browser = 'Chrome';

function launchBrowser(browserName) {

    switch (browserName) {
        case 'Chrome':            
            console.log('Browser to be launched is Chrome');
            break;

        case 'Firefox':            
            console.log('Browser to be launched is Firefox');
            break;
    
        default:
            break;
    }
    
}

launchBrowser(browser);