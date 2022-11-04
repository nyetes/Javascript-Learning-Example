// // Defining a Classes
//     // the name of a claess in CamelCase nad block code {}.
//     // example and syntax
     
//     class ClassName{
//         // code goes here
//     }

// // Class Constructor
//     class Person {
//         constructor(firstName, lastName) {
//             console.log(this) // check output from here
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }
//     }
//     const person = new Person();
//     console.log(person); //Person { firstName: undefined, lastName: undefined }

// object undefined vayesi arko values pass the properties garnu parx

    // class Person{
    //     constructor(firstName, lastName){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //     }
    // }
    // const person = new Person('Nites', 'Maharjan');
    // console.log(person); //Person { firstName: 'Nites', lastName: 'Maharjan' }

    // class Person{
    //     constructor(firstName, lastName){
    //         console.log(this);
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //     }
    // }
    // const person = new Person('Nites', 'Maharjan');
    // const person1 = new Person('Nites', 'Maharjan');
    // const person2 = new Person('Nites', 'Maharjan');
    // console.log(person);
    // console.log(person1);
    // console.log(person2); 

// using person as a object it we needed 
    // class Person {
    //     constructor(firstName, lastName, age, country, city) {
    //         console.log(this);
    //         this.firstName = firstName;
    //         this.lastName =lastName;
    //         this.age = age;
    //         this.counrty = country;
    //         this.city= city;
    //     }
    // }
    // const person1 = new Person('Nites', 'Maharjan', 20,  'Nepal', 'lubhu');
    // console.log(person1);

// Defining values in construtor
        // class Person {
        //     constructor(
        //         firstName = 'Nites',
        //         lastName = 'Maharjan',
        //         age = 20,
        //         country = 'Nepal',
        //         city = 'lubhu'
        //     ){
        //         this.firstName = firstName
        //         this.lastName = lastName
        //         this.age = age
        //         this.country = country
        //         this.city = city
        //     }

        // }

        // const person1 = new Person();
        // const person2 = new Person('Barkha', 'Singh', 28, 'Nepal', 'Lubhu');
        
        // console.log(person1);
        // console.log(person2);

// // Class Methods
//     class Person{
//         constructor(firstName, lastName, age, country, city){
//             this.firstName = firstName
//             this.lastName = lastName
//             this.age = age
//             this.country = country
//             this.city = city
//             this.skill =[]
//             this.status = 0
    
//         }
//         getFullName(){
//             const fullName = this.firstName+ ' ' + this.lastName;
//              return fullName
//         }
//     }

//     const person1 = new Person('Nites','Maharjan', 20, 'Nepal', 'Lubhu');
//     const person2 = new Person('Barkha', 'Singh', 28, 'Nepal', 'patan');

//     console.log(person1.getFullName())
//     console.log(person2.getFullName())

//     console.log(person1.status)
//     console.log(person1.status)

//     console.log(person2.skill)
//     console.log(person2.skill)


// Getter
        // - it simply say that - get method used as to acessed values from the object-
        //  - and also get using the fuction to get those values.

    // class Person{
    //     constructor(firstName, lastName, age, country, city){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //         this.country = country;
    //         this.city = city;
    //         this.status = 0;
    //         this.skill = [];

    //     }
    //     getFullName(){
    //         const fullName = this.firstName+ ' ' + this.lastName;
    //         return fullName
    //     }
    //     getStatus(){
    //         return this.status
    //     }
    //     getSkill(){
    //         return this.skill
    //     }
    // }

    // const person1 = new Person('Nites','Maharjan', 20, 'Nepal', 'Lubhu');
    // const person2 = new Person('Barkha', 'Singh', 28, 'Nepal', 'patan');

    // console.log(person1.getStatus);
    // console.log(person2.getSkill);

    // console.log(person2.getStatus);
    // console.log(person1.getSkill);

//Setter
    //- method allow us the values of certaion properties.
    //- we write a setter method using keyowrd set that need to follow functions.

    // class Person{
    //     constructor(firstName, lastName, age, country, city){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //         this.country = country;
    //         this.city = city;
    //         this.status = 0;
    //         this.skill = [];
    //     }
    //     getFullName(){
    //         const fullName = this.firstName+ ' ' + this.lastName;
    //         return fullName
    //     }
    //     getStatus(){
    //         return this.status
    //     }
    //     getSkill(){
    //         return this.skill
    //     }
    //     set setStatus(status) {
    //         this.status += status
    //     }
    //     set setSkill(skill) {
    //         this.skill.push(skill)
    //     }

    // }
    // const person1 = new Person('Nites','Maharjan', 20, 'Nepal', 'Lubhu');
    // const person2 = new Person('Barkha', 'Singh', 28, 'Nepal', 'patan');

    // person1.setStatus = 1;
    // person1.setSkill = 'HTML';
    // person1.setSkill = 'CSS';
    // person1.setSkill = 'JavaScript';

    // person2.setStatus = 2;
    // person2.setSkill = 'Planning';
    // person2.setSkill = 'Managing';
    // person2.setskill = 'Organizing';

    // console.log(person1.status);
    // console.log(person2.status);

    // console.log(person1.skill);
    // console.log(person2.skill);

// Static Method
        //

        // class Person {
        //     constructor(firstName, lastName, age, country, city) {
        //       this.firstName = firstName
        //       this.lastName = lastName
        //       this.age = age
        //       this.country = country
        //       this.city = city
        //       this.score = 0
        //       this.skills = []
        //     }
        //     getFullName() {
        //       const fullName = this.firstName + ' ' + this.lastName
        //       return fullName
        //     }
        //     get getScore() {
        //       return this.score
        //     }
        //     get getSkills() {
        //       return this.skills
        //     }
        //     set setScore(score) {
        //       this.score += score
        //     }
        //     set setSkill(skill) {
        //       this.skills.push(skill)
        //     }   
        // }    
        // getPersonInfo() {
        //     let fullName = this.getFullName()
        //      return fullName
        // }
            
    
        //  static favSkill() {
        //     const skill = ['HTML', 'CSS', 'JS', 'Node']
        //     const index = Math.floor(Math.random()* skill.lenght)
        //     return skill[index]
        // }

        // static showDatetime() { 
        //     let now = new Date()
        // }

        // console.log(Person.favSkill())
        // console.log(Person.showDatetime())