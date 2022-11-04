// Functional Programming
        // forEach, Map, Filter, Reduce, Find, Every, Some, Sort

//forEach
        //its array element.. callback function with the element with the index parameter and array itself

    // let sum = 0;
    // const numbers = [1,2,3,4,5];
    // numbers.forEach(numn => console.log(numbers));

    // console.log(sum);

    // let sum = 0;
    // const numbers = [1,2,3,4,5];
    // numbers.forEach(num => sum += num);

    // console.log(sum); // 15

// Map
        // - iterate an arrary element and modify the array elements.
        // - tkae callback function with element index array parameter and return a new arrar.

        // const modifiedArray = arr.map(function(element, index, arr){
        //         return element
        // })

        // const numbers = [1, 2, 3, 4, 5]
        // const numbersSquare = numbers.map((num) => num * num)

        // console.log(numbersSquare)
        
        // const names = ['Nies', 'Mias', 'lias', 'Broossk']
        // const namesToUpperCase = names.map((name) => name.toUpperCase())
        // console.log(namesToUpperCase)

// Filter
        //filter out items which is full flitering conditions and return a new array.
        // const scores = [
        //         { name: 'Alexis', score: 95 },
        //         { name: 'Mathias', score: 80 },
        //         { name: 'Elias', score: 50 },
        //         { name: 'Martha', score: 85 },
        //         { name: 'John', score: 100 },
        //       ]
              
        //       const scoresGreaterEight = scores.filter((score) => score.score > 80)
        //       console.log(scoresGreaterEight)

// Reduce 
        // it takes callback function and take it accumalotor current and optional initial vales as parameter and return a single values
        // by default it get first values.
        /* arr.reduce((acc, cur) => {
                return
        }, initialValues) */

        // const numbers = [1, 2, 3, 4, 5]
        // const sum = numbers.reduce((acc, cur) => acc + cur, 0)

        // console.log(sum) // 15

// every 
        // check if all the elements are similar in one aspect and it return boolean

        // const names = ['Nites', 'Aless', 'jad', 'haxx']
        // const areAllStr = names.every((name) => typeof name === 'string')

        // console.log(areAllStr) //true

// find 
        // return the first element ehich sarisfies the conditon 

        // const ages = [24, 22, 25, 32, 25, 18]
        // const age = ages.find((age) => age <20)

        // console.log(age) // 18

// FindIndex
        // return the postion of the first element which satisfies the conditions.

        // const names = ['Nites', 'aleis', 'john', 'alss']
        // const ages = [24, 22, 25, 32 ,18]

        // const result = names.findIndex((name) => name.length > 7)
        // console.log(result) // -1
        
        // const age = ages.findIndex((age) => age < 20)
        // console.log(age) // 5

// some 
      //  check if some of the elements are smiliar in one aspect

//       const names = ['Nites', 'aleis', 'john', 'alss']
//       const bools = [true, true, true, true]

//       const areSomeTrue = bools.some((b) => {
//         return b === true
//       })

//       console.log(areSomeTrue) // true