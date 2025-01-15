var uniqueID = 50;
uniqueID = 'alpha';
uniqueID = "abc123";
var userName = 'abc123';
userName = 54;
userName = "csk";
function invokeBrowser(browserName) {
    if (browserName = "Chromium") {
        console.log("launch Chrome browser");
    }
    else {
        console.log("launch firefox browser");
    }
}
invokeBrowser("Chromium");
var user1 = {
    role: 'tester',
    shift: 2,
    name: "tester",
    id: 108,
    access: ['read', 'write']
};
var user2 = {
    role: 'devops',
    shift: 2,
    name: "asif",
    id: 345,
    access: ['read', 'write', 'delete', 'add', 'delete']
};
console.log(user2.access);
