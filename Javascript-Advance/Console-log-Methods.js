 // We use console object methods to show output on the browser console and we use document.write to show output on the browser document(view port).

 // 1. Console.log()

 console.log('30 Days of JavaScript');
// css using on console.log
 console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text

 // 2. cosole.warn() - console.warn() to give warning on browser.
  
 console.warn('This is a warning')
 console.warn(
   'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
 )
 console.warn('Warning is different from error')
 
// 3. console.error()- showns an error message.
console.error('this is an error message');
console.error('we all make a mistake ');

// 4. console.table()-  display data as a table on the console.

const user = {
    name: 'Nites',
    title: 'Developer',
    country: 'Nepal',
    city: 'Lubhoo',
    age: 20
  }
  console.table(user);

  // multi-table
    let user2 = [ {
        name: 'Nites',
        title: 'Developer',
        country: 'Nepal',
        city: 'Lubhoo',
        age: 20
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
     age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
console.table(user2);

// console.time() -Starts a timer you can use to track how long an operation takes.
// console.info() - display information message on browser console.
// consol.assert() - The console.assert() methods writes an error message to the console if the assertion is false. 
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
 

// console.group() -The console.group() can help to group different log groups

 
const names = ['Nites', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user3 = {
  name: 'Nites',
  title: 'Developer',
  country: 'Nepal',
  city: 'lubho',
  age: 20
}
const users = [
  {
    name: 'Nites',
    title: 'Developer',
    country: 'Nepal',
    city: 'lubho',
    age: 20
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user3)
console.log(users)
console.groupEnd()

// console.count()-prints the number of time this console.count() is called.
    // it takes label parameter and helpfull count ther number od times function called 
    const func = () => {
        console.count('Function has been called')
      }
      func()
      func()
      func()


// console.clear() - clean the browser console

 
