// Function 
// - function can be declare or created on cpuple of ways
//     - Declaration function
//     - Expression  function
//     - Anonymous function
//     - Arrow function

    // // 1. Decalaration Function 
    //     // how to call function syntax

    // function functionName(){
    //     // code goes it here;
    // }
    // functionName() // calling function by its name and it parameter

    // // Function without a parameter and return

    // function square(){
    //     let num = 2;
    //     let sq = num * num;
    //     console.log(sq);
    // }
    // square(); // 4

     // // Function with a parameter and return

    //  function addTwoNumbers(){
    //     let numOne = 10;
    //     let numTwo = 20;
    //     let sum = numOne + numTwo;

    //     console.log(sum);
    // }

    // addTwoNumbers(); // 30 where function has called by its name to excuted.

    // Function Returing Values
      // return calues to a function instead of printing it 

    // function printfullName() {
    //     let firstName = 'Nites';
    //     let lastName = 'Maharjan';
    //     let space = ' ';
    //     let fullName = firstName + space + lastName;
    //     return fullName;
    // }
    // console.log(printfullName());

    // function addTwoNumbers() {
    //     let numOne = 2;
    //     let numTwo = 3;
    //     let total = numOne + numTwo;
    //     return total;
    // }
    // console.log(addTwoNumbers());

    // Function with parameter
        // pass many parameter as datatype(number sting bpplean object funtion) as a parameter

    // function sumTwoNumbers(numOne, numTwo){
    //     let sum = numOne + numTwo;
    //     console.log(sum);
    // }
    // sumTwoNumbers(10, 20);

    // function functionName(numOne, numTwo) {
    //     let sum = numOne + numTwo;
    //     return sum;
    // }
    // console.log(sumTwoNumbers(10, 20))
    // function printFullName(firstName, lastName) {
    // return `${firstName} ${lastName}`
    // }
    // console.log(printFullName('Nitesh', 'Maharjan'))
    
// Anonymous Function
    // - it call without name function

    // const anonymousFun = function() {
    //     console.log('I am an anonymous function and my calue is stored un anonymousFun');

    // }

// Expression Function
    //it like a anonymous function. after the anonymous function is created without name -
    //- here it assign it variable.
    // to return vales the function we should call variables.

    // const square = function(n) {
    //     return n * n;
    
    // }
    // console.log(square(2)); 

// Self Invoking Functions
    // it is anonymous function whuc do not need toe called teo return a values.

    // (function(n) {
    //     console.log(n * n)
    //   })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
      
    //   let squaredNum = (function(n) {
    //     return n * n
    //   })(10)
      
    //   console.log(squaredNum)

// Arrow Function
    // it is alternative function to write a fucntion.

    // hello = () => {
    //     return 'hello world';
    // }
    
    // function square(n) {
    //     return n * n
    //   }
      
    //   console.log(square(2)) // 4
      
    //   const square1 = n => {
    //     return n * n
    //   }
      
    //   console.log(square(2))  // -> 4
      
    //   // if we have only one line in the code block, it can be written as follows, explicit return
    //   const square2 = n => n * n  // -> 4

// Amother Example
    // const changeUpperCase = arr => {
    //     const newArr = []
    //     for (const element of arr) {
    //         newArr.push(element.toUpperCase())
    //     }
    //     return newArr
    // }

    // const countries = ['Nepal', 'Japan', 'Usa', 'Uk']
    // console.log(changeUpperCase(countries))

    // const printFullName = (firstName, lastName) => {
    //     return `${firstName} ${lastName}`
    // }
    // console.log(printFullName('Nites', 'Maharjan'))

    //using simply arro function

    // const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
    // console.log(printFullName('Nitesh', 'Maharjan'))

// Function with the default parameter
    // //syntax
    // function functionName(param = value) {

    // }
    // functionName()
    // functionName(arg)

    // function greeting(name = 'Nitesh'){
    //     let message = `${name}, Welcome to my world!`
    // }
    // console.log(greeting())
    // console.log(greeting('AHs'))

    // function generateFullName(firstName = 'Nites', lastName = 'Maharjan') {
    //     let space = ' '
    //     let fullName = firstName + space + lastName
    //     return fullName
    // }
    // console.log(generateFullName())
    // console.log(generateFullName('apple', 'ball'))

    // const calculateAge = (birthYear, currentYear = 2022) => currentYear - birthYear
    // console.log('Age: ', calculateAge(1999))
    