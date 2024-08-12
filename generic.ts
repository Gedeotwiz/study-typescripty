
function calculate(ages: number): number; 
function calculate(ages: string): string; 
function calculate<A>(ages: A): A; 

function calculate<A>(ages: A): A {
    return ages;
}

class CalculateAge<A> {
    sum: A;

    constructor(value: A) {
        this.sum = value;
    }
}

const result = calculate<number>(30); 
console.log(result); 

const ageCalculator = new CalculateAge<number>(25); 
console.log(ageCalculator.sum); 
