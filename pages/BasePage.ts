import { promises } from "dns";
import { Browser, BrowserContext, Page, chromium } from "playwright";

export class BasePage {

    protected browser : Browser;
    protected context : BrowserContext;
    protected page : Page;

    constructor(){
        //this refers to the instance of the class
        this.browser = null as any;
        this.context = null as any;
        this.page = null as any;
    }

    //Method to initialize the browser
     //access modifier async methodName() : return type
    async initialize(): Promise <void>{
        this.browser = await chromium.launch({headless:false});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    //Method to navigate to specific url
    async navigateTo(url:string): Promise<void>{
        this.page.goto(url);
    }

    //Method to close the browser
    async closeBrowser(): Promise<void>{
        this.browser.close();
    }

}