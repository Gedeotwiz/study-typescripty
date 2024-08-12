function calculate(ages) {
    return ages;
}
var CalculateAge = /** @class */ (function () {
    function CalculateAge(value) {
        this.sum = value;
    }
    return CalculateAge;
}());
var result = calculate(30);
console.log(result);
var ageCalculator = new CalculateAge(25);
console.log(ageCalculator.sum);
