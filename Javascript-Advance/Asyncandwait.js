// Async and await is an styling way to handled promise.

// using async but not using await

// const square = async function (n) {
//     return n * n
// }
//  square(2)

const square = async function (n) {
    return n * n
  }
  const value = await square(2)