// // variables

// let firstName = 'Nitesh';
// let lastName = 'Maharjan';
// let country = 'Nepal';

// const PI = math.PI;
// const gravity = 9.81;

// // Arrays

// const names = ['Nitesh', 'nyets', 'neetes', 'nites'];
// const numbers = [1, 2, 3, 4, 5, 6];
// const country = ['Nepal', 'US', 'UK', 'Germany',];


// // Functions

// const printFullName = (firstName, lastName) => firstName + ' ' + lastName;
//     // function print the fullName of a person 

// const square = (n) => n * n;
//     // calculate a square of a number;

// const showDateTime = () => {
//     const now = new Date()
//     const year = now.getFullYear()
//     const month = now.getMonth()
//     const date = now.getDate()
//     const hours = now.getHours()
//     const minutes = now.getMinutes()
//     if (hours < 10) {
//         hours = '0' + hours
//     }
//     if (minutes < 10) {
//         minutes = '0' + minutes
//     }

//     const dateMonthYear = date + '.' + '.' + year;
//     const time = hours + ':' + minutes;
//     const fullTime = datrMonthYear + ' ' + time;
//     return fullTime
// }

 

// // Loop 
//     for (let i = 0; i < n; i++;){
//         console.log()
//     }

//     for (const name of names) {
//         console.log(naem.toUpperCase())
//     }

//     names.forEach((name) => name.toUpperCase())

//     const person ={
//         firstName : 'Nites',
//         lastName : 'Maharjan',
//         age : 22,
//         skills : ['HTML', 'CSS', 'JS', 'Node', 'python']
//     }
//     for(const key in user){
//         console.log(key)
//     }

// // Object 

//     const person = {
//         firstName : 'Nites',
//         lastName : 'Maharjan',
//         age : 22,
//         skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python',]
//     }

//     for (const key in person) {
//         console.log(key, person[key])
//     }

// // Conditons

// let num = 3;
// if(num > 0) {
//     console.log(`${num} is a postive number`)
// } else {
//     console.log(`${num} is a negative number`)
// }

// let a = 0;
// if ( a > 0){
//     console.log(`${a} is a postive number`)
// } else if ( a < 0){
//     console.log(`${a} is a negative number`)
// } else if (a == 0) {
//     console.log(`${a} is a zero`)
// } else {
//     console.log(`${a} is not a number`)
// }

// // switch
//     let dayUserInput = prompt('Whar day is today ?')
//     let day = dayUserInput.toUpperCase()

//     switch (day) {
//         case 'monday':
//             console.log('Today is Monday')
//             break
//         case 'tuesday':
//             console.log('Today is Monday')
//             break
//         case 'Wednesday':
//             console.log('Today is Monday')
//             break
//         case 'Thursday':
//             console.log('Today is Monday')
//             break
//         case 'Friday':
//             console.log('Today is Monday')
//             break
//          case 'Saturday':
//             console.log('Today is Monday')
//             break
//             case 'Sunday':
//             console.log('Today is Monday')
//             break
//             default:
//                 console.log('It is no a week day')
//     }

//     // ternay opertion

//     let isRaining = true
//     isRaining
//     ? console.log('You need a rain coat')
//     : console.log('No need of rain coat')

// // classes

//     class Person {
//         constructor(firsName, lastName){
//             console.log(this)
//             this.firstName = firstName
//             this.lastName = lastName
//         }
//     }