// function myFirstName(){
//     console.log("Hello");
// }

// function mySecondName(){
//     console.log("GoodBye");
// }

// myFirstName();
// mySecondName();

// function display(val){
//     console.log(val)
// }
// function twoSum(num1,num2){
//     let num3=num1+num2;
//     display(num3)
// }
// twoSum(3,4);


// function display(val){
//     console.log(val);
// }

// function twoSum(num1,num2,callback){
//     let sum=num1+num2;
//     display(callback);
// }
// twoSum(3,4,display);

// function doSomething(callback) {
//     // Perform some operations
  
//     // Simulating an asynchronous operation with setTimeout
//     setTimeout(function() {
//       const result = 42;
//       callback(result); // Invoke the callback function with the result
//     }, 2000);
//   }
  
//   function handleResult(result) {
//     console.log('The result is: ' + result);
//   }
  
//   // Calling the doSomething function and passing the handleResult function as a callback
//   doSomething(handleResult);
  
  // Output:
  // The result is: 42 (after a 2-second delay)


//   const x=function(a,b){
//     return a*b;
//   }
//   let ans=x(4,5);
//   console.log(ans);

function first(){
  console.log("Hello");
}

function second(){
  console.log("GoodBye");
}

// first();
// second();

// function myCalculator(num1,num2){
//   let num3=num1+num2;
//   return num3;
// }
// let ans=myCalculator(4,5);

// console.log(ans);

function myDisplay(some){
  console.log(some);
}

function myCalculator(num1,num2,myCallback)
{
  let sum=num1+num2;
  myCallback(sum);
}
let ans=myCalculator(3,4,myDisplay);

  