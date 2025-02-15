var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Browser = /** @class */ (function () {
    function Browser(browsertyp) {
        this.browserType = browsertyp;
    }
    Browser.prototype.logsession = function () {
        console.log("Browser session used is ".concat(this.browserType));
    };
    Browser.prototype.launchBrowser = function () {
        this.logsession();
        return "Launching ".concat(this.browserType, " browser");
    };
    return Browser;
}());
var BrowserSession = new Browser('Chrome');
console.log(BrowserSession.launchBrowser());
var BaseClass = /** @class */ (function () {
    function BaseClass(browsertyp) {
        this.browserType = browsertyp;
    }
    BaseClass.prototype.logsession = function () {
        console.log("This is from the base class");
        console.log("Browser session used is ".concat(this.browserType));
    };
    BaseClass.prototype.launchBrowser = function () {
        this.logsession();
        return "Launching ".concat(this.browserType, " browser");
    };
    return BaseClass;
}());
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.captureScreenshot = function () {
        this.logsession();
        console.log("Capturing screenshot in ".concat(this.browserType));
    };
    Dashboard.prototype.logsession = function () {
        console.log("This is from Dashboard class");
    };
    return Dashboard;
}(BaseClass));
var session = new Dashboard('firefox');
session.captureScreenshot();
