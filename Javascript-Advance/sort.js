// Sort
        // methods to arranges elements either ascending aor decendign order.

        // const product = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
        // console.log(product.sort())

        // sorting numneric values
         // 
        //  const numbers = [9.92, 3.14, 100, 37]
        //  console.log(numbers.sort())
        //  numbers.sort(function (a, b){
        //     return a - b
        //  })

        //  console.log(numbers)

        //  numbers.sort(function (a, b){
        //     return b - a
        //  })
        //  console.log(numbers)

        // sorting object arrays

        const users = [
            { name: 'Asabeneh', age: 150 },
            { name: 'Brook', age: 50 },
            { name: 'Eyo', age: 100 },
            { name: 'Elias', age: 22 },
        ]
        users.sort((a, b) => {
            if (a.age < b.age) return -1
            if (a.age > b.age) return 1
            return 0
          })
          console.log(users)