var inputModel = (function () {
    function inputModel() {
    }
    return inputModel;
}());
/// <reference path="./inputModel.ts" />
var Startup = (function () {
    function Startup() {
        var _this = this;
        //this has been adopted by babel stage 2 :transform-class-properties
        //see:https://babeljs.io/docs/plugins/preset-stage-2/
        //also see: http://www.webpackbin.com/Vys1jFkNf
        this.name = "bo chen ";
        this.simpleFunc = function (para) {
            console.log("this.name = " + _this.name);
        };
    }
    Object.defineProperty(Startup.prototype, "Value", {
        get: function () {
            return this.name;
        },
        set: function (newValue) {
            this.name = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Startup.prototype.getName = function () {
        return this.name;
    };
    // becuase of type inference, specifying the return type is optional
    Startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
Startup.main();
var startup = new Startup();
//# sourceMappingURL=app.js.map