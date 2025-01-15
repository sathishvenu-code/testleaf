let uniqueID : number | string = 50;
uniqueID = 'alpha';
uniqueID = "abc123";


// Type aliases union type

type stringNum = string | number;

let userName : stringNum = 'abc123';
userName = 54;
userName = "csk";

type supportedBrowsers = "Chromium" | 'Firefox';

function invokeBrowser(browserName:supportedBrowsers) {

    if (browserName = "Chromium") {

        console.log("launch Chrome browser");        
        
    } else {

        console.log("launch firefox browser");        
        
    }
    
}

invokeBrowser ("Chromium");


// Type aliases intersection type

type devOps = {
    role : string,
    access : string[],
    shift : number
}

type qc = {
    name : string,
    id : number
}


type developer = devOps & qc;

let user1 : developer = {

    role : 'tester',
    shift : 2,
    name : "tester",
    id : 108,
    access : ['read','write']
}

let user2 : developer = {
    
    role : 'devops',
    shift : 2,
    name : "asif",
    id : 345,
    access : ['read','write','delete','add','delete']
}

console.log(user2.access);
