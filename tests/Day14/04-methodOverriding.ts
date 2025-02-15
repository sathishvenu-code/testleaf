class page{
    loadUrl():void{
        console.log(`This belongs to the parent class`);
    }
}

class subPage extends page{
    loadUrl():void{
        console.log(`This belongs to the child class`);
    }
}

const testPage = new subPage();
testPage.loadUrl();