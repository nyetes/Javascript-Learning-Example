// callback function is a fucntion passed into another function as an argument
// which invoked inside the outer function to complete some kind of routine or action,

// function greeting(name) {
//     alert(`Heloo, $(name)`);
// }

// function processUserInput(callback) {
//     const name = prompt("please enter your name.");
//     callback(name);
// }

// processUserInput(greeting);

// callback 

// const doSomeThing = callback => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         callback('It did not go well', skills)
//     }, 2000)
// }

// const callback = (err, result) => {
//     if (err){
//         return console.log(err)
//     }
//     return console.log(result)
// }

// doSomeThing(callback)


// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         callback(false, skills)
//     }, 2000)
// }

// doSomething((err, result) => {
//     if(err) {
//         return console.groupCollapsed(err)
//     }
//     return console.log(result)
// })





// Promise Constructor
        // new promise using keywords that follows promise and followed paranthesis
        // resolve and reject function
        // syntax
        // const promise = new Promise ((resolve, reject) =>{
        //     resolve('sucess')
        //     reject('failure')
        // })

// // promise 
    // // with the resolve wala 
//     const doPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const skills = ['HTML', 'CSS', 'JS']
//             if (skills.length > 0) {
//                 resolve(skills)
//             } else {
//                 reject('something wrong has happended')
//             }
//         }, 2000)
//     })

//     doPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error))

// promise with reject 

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.indexOf('Node') !== -1) {
//         resolve('fullstack developer')
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })



// doPromise 
// .then(result => {
//     console.log(result)
// })
// .catch(error => console.log(error))

// Fetch API - pending