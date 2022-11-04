// storing multiple values 
// yesma huni vaneko collection of data types  jun chai modified ra changeable hunx
 // yeso types methods




    //  creating arrya with the values
        // const numbers = [0, 1, 2, 3, 4, 5]
        // const nam = ['Nitesh', 'Maharjan']
        // console.log('Numbers:',numbers)
        // console.log('Name:', nam)

    // Arrary Constructor

    // const arr = Array ()
    // console.log(arr) // create empty array

    // const eightEmptyValues = Array(8); // its create a 8 emoty array
    // console.log(eightEmptyValues); // empty x 8

//  Creating static values with fill
        //filling array element with the static values
    // const arr = Array() // creates an empty array
    // console.log(arr)

    // const eightEmptyValues = Array(8).fill('0')
    // console.log(eightEmptyValues) 
    /*[
        '0', '0', '0',
        '0', '0', '0',
        '0', '0'
      ] */

      // Concatenating array using concat
        // adding two string of array
        //  const firstFruits = ['banana', 'orange', 'mango', 'lemon']
        //  const lastFruits = ['Tamato', 'grapes']
        //  const firstAndLast = firstFruits.concat(lastFruits)

        //  console.log(firstAndLast)


         
//  Getting array length
      // it check the index of existing array

//  Getting index an element in arr array
   
    //   const numbers = [1,2,3,4,5,6]
    //    console.log(numbers.indexOf(5)) //4
    //    console.log(numbers.indexOf(0)) // -1


//  Checking array

    //   const numbers = [1,2,3,4,5]
    //   console.log(Array.isArray(numbers)) // true

    //   const numbers = 100
    //   console.log(Array.isArray(numbers)) //false


  //  //  Converting array to string
      // toString
       
    //   const numbers = [1, 2, 3, 4, 5, 6]
    //   console.log(numbers.toString)

    //   const names = ['nitesh', 'Mahrjan']
    //   console.log(names.toString)

 //  Joining array elements
  // join with ''

//   let names = ['nies', 'mahar', 'jaas', 'hel']
//   console.log(names.join()) // nies,mahar,jaas,hel
//   console.log(names.join('')) //niesmaharjaashel
//   console.log(names.join(', ')) //nies, mahar, jaas, hel


//  Slice array elements
      // cut out items into starting and ending - ending not required

    //   const numbers = [1,2,3,4,5]
    //   console.log(numbers.slice()) // copies all 
    //   console.log(numbers.slice(1,4)) // 2, 3, 4

//  Splice method in array
 // takes 3 parameter starting starting numbers and numbers of times to be removed and number of  items to be used

    // const numbers = [1,2,3,4,5]
    // console.log(numbers.splice()) // remove all items

    // const numbers = [1,2,3,4,5]
    // console.log(numbers.splice(0,1)) // 1 be removed

    //  Adding item to an array using push
     // push add the items at the end
     //examples
    //   let arr = ['item1', 'item2', 'item3']
    //   arr.push('new item')
    //   console.log(arr)

//  Removing the end element using pop
      // pop remove last items
    //   let arr = [1, 2, 3, 4, 5]
    //   arr.pop()

    //   console.log(arr)// remove last number

//  Removing an element from the beginning
        //shift be used to remove
    //   const numbers = [1, 2, 3, 4, 5]
    //   numbers.shift()
    //   console.log(numbers) // 2, 3, 4, 5]

// Add an element from the beginning
      // UNSHIFT
    //   const numbers = [1, 2, 3, 4, 5]
    //   numbers.unshift(0)

    //   console.log(numbers) //[ 0, 1, 2, 3, 4, 5 ]


//  Reversing array order
 // reverse order an array
    //    const numbers = [1,2,3,4,5]
    //    numbers.reverse()
    //    console.log(numbers) // [ 5, 4, 3, 2, 1 ]

    //    numbers.reverse()
    //    console.log(numbers) // [ 1, 2, 3, 4, 5 ]

//  Sorting elements in array
        // arrange in order of elements
        // const webTech = [
        //     'Html',
        //     'Css',
        //     'Javascript',
        //     'React',
        //     'Nodejs',
        //     'MongoDB'
        // ]

        // webTech.sort()
        // console.log(webTech) // 'Css', 'Html', 'Javascript', 'MongoDB', 'Nodejs', 'React' ]
