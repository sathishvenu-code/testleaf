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
var page = /** @class */ (function () {
    function page() {
    }
    page.prototype.loadUrl = function () {
        console.log("This belongs to the parent class");
    };
    return page;
}());
var subPage = /** @class */ (function (_super) {
    __extends(subPage, _super);
    function subPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subPage.prototype.loadUrl = function () {
        console.log("This belongs to the child class");
    };
    return subPage;
}(page));
var testPage = new subPage();
testPage.loadUrl();
