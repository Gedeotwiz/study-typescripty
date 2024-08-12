function Log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Arguments for ".concat(propertyKey, ": ").concat(args.join(', ')));
        return originalMethod.apply(this, args);
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
var calculator = new Calculator();
var sum = calculator.add(5, 3);
console.log("Sum: ".concat(sum));
var difference = calculator.subtract(10, 4);
console.log("Difference: ".concat(difference));
