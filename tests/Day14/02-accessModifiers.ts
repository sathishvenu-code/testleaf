class Browser{

    private browserType:string;

    constructor(browsertyp:string){
        this.browserType=browsertyp;
    }

    private logsession(){
        console.log(`Browser session used is ${this.browserType}`);
    }

    launchBrowser():string{
        this.logsession();
        return `Launching ${this.browserType} browser`;
    }

}

const BrowserSession = new Browser('Chrome');
console.log(BrowserSession.launchBrowser());

class BaseClass{

    protected browserType:string;

    constructor(browsertyp:string){
        this.browserType=browsertyp;
    }

    protected logsession(){
        console.log(`This is from the base class`);
        console.log(`Browser session used is ${this.browserType}`);
    }

    launchBrowser():string{
        this.logsession();
        return `Launching ${this.browserType} browser`;
    }

}

class Dashboard extends BaseClass{
    captureScreenshot(){
        this.logsession();
        console.log(`Capturing screenshot in ${this.browserType}`);
    }

    protected logsession(): void {
        console.log(`This is from Dashboard class`);
    }
}

const session = new Dashboard('firefox');
session.captureScreenshot();