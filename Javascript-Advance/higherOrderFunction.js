// function take other function as parameter or return a function as a values
    // yesma hernu parni chai CallBack

// Callback - one function which can be passed as parameter to other function

// a callback function, the function could be any name
// const callback = (n) => {
//     return n ** 2
//   }
  
//   // function take other function as a callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }
  
//   console.log(cube(callback, 3)); // 27

//   // returun function - high order function return functio as a values
//     const highOrder = n => {
//         const doSomething = m =>{
//             const doWhatEver = l => {
//                 return 2 * n + 3 * m + l;
//             }
//             return doWhatEver;
//         }
//         return doSomething;
//     }
//     console.log(highOrder(2)(3)(10)); // 23

// callback fucntion forEach method
//    const numbers = [1,2,3,4];

//    const sumArray = arry => {
//     let sun =0;
//     const callBack = function(element){
//         sum += element
//     }
//     numbers.forEach(callBack)
//     return sum
//    }
//     console.log(sumArray(numbers));




// Setting Time
// setInterval and setTimeOut

//    const message = function(){
//     console.log('this is mesage is shown after a 3 sec');
//    }

//    setTimeout(message, 3000);

        // anonymous function -  directly define the function inside another function without instead of calling

            // setTimeout(function(){
            //     console.log("this is message shown after  3sec")
            // }, 3000);


// function sayHello(){
//     console.log('Hello');
// }
// setInterval
// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 2000)

