// const factorial = (num) => {
//     if(num<0){
//         console.log("Factorial is not defined for negative numbers.");
//     }
//     if (num === 0) return 1;
//     if (num === 1) return 1;
  
//     let val = 1;
  
//     for (let i = num; i > 0; i--) {
//       val *= i; 
//     }
  
//     return val; 
//   };


const factorial = (num) => {
    // Check if the number is negative
    if (num < 0) {
      console.log("Factorial is not defined for negative numbers.");
      return;
    }
  
    // Handle base cases for 0 and 1
    if (num === 0 || num === 1) return 1;
  
    // Recursive call to calculate factorial
    return num * factorial(num - 1);
  };
  console.log(factorial(3));  
// factorial(-2)
  