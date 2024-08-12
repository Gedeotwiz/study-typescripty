
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value; 
    descriptor.value = function (...args: any[]) { 
      console.log(`Arguments for ${propertyKey}: ${args.join(', ')}`); 
      return originalMethod.apply(this, args); 
    };
  }
  
  class Calculator {
     
    add(a: number, b: number): number {
      return a + b; 
    }
  
    
    subtract(a: number, b: number): number {
      return a - b; 
    }
  }
  
  
  const calculator = new Calculator();
  const sum = calculator.add(5, 3); 
  console.log(`Sum: ${sum}`); 
  
  const difference = calculator.subtract(10, 4); 
  console.log(`Difference: ${difference}`); 
  