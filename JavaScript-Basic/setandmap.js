// sets is collection of unique values

// const Companies = new Set();
// console.log(Companies) // empty sets aaucha

// // example chai new set aaray bata ledai 
//      const languages = [
//         'English',
//         'Nepali',
//         'Newari'
//      ]
//      const setOfLanguages = new Set(languages);
//      console.log(setOfLanguages); // Set(3) { 'English', 'Nepali', 'Newari' }

     // adding element garnu paryo vane variableName.add garni 
     //delete garnu paryo vaen  varibaleName.delete 
     //checking ma has le check garx in existing set


     // Maps
            // it hold key values pairs where key can be any dataypes
            // examples of creating empty values map

            // const map = new Map();
            // console.log(map); // nothing

        let countries =[
            ['Nepal', 'Kathmandu'],
            ['Japan', 'Tokyo'],
            ['Norway', 'oslo']

        ]
        const map = new Map(countries);
        console.log(map);
        console.log(map.size);

        const countriesMap = new Map();
        console.log(countriesMap.size);
        countriesMap.set('Nepal', 'kathmandu');
        countriesMap.set('Japan', 'Tokyo');
        countriesMap.set('Finland', 'oslo');
        console.log(countriesMap);
        console.log(countriesMap.size);  /* // Map(3) {
            'Nepal' => 'Kathmandu',
            'Japan' => 'Tokyo',
            'Norway' => 'oslo'
          } */

        


       // geting values from Map

       console.log(countriesMap.get('Finland')); //oslo


       // checking  key on Map

       // yo milya na 
       
        console.log(countriesMap.has('Finland')); // true

        for (const country of countriesMap){
            console.log(country)
        };
        for (const [counrty, city] of countriesMap){
            console.log(country, city)
        };
