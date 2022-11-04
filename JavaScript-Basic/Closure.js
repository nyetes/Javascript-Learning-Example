// js belong with local and global 
// global variable can be local with closure

// simple word ma chai outer function ko scopes(variables haru chai inner function bata acess garna milca)
// Global Variable with function s

// function myFunction(){
//     let a = 4;
//     return a * a ;
// }

// function init(){
//     let name = 'hello'; // init name in local variable
//     function displayName(){
//         console.log(name); // variable declared in parent function 
//     }
//     displayName();
// }
// init();

// function makeFunct(){
//     const name = 'HelloFuckingWorld';
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunct = makeFunct();
// myFunct

// Closure Scope Chain
    // local Scope 
    // Enclosing scope (block,function. module)
    // global scope

    // closure ma loop le k garx example
     function setUpHelp(){
        let helpText =[
            {id: 'email', help: 'your email address '},
            {id:'name', help: 'your full name' },
            {id:'age', help:'your age'}
        ];
         for (let i = 0; i < helpText.length; i++){
            let items = helpText[i];
            function myFunc(){
            showHelp(items.help);
            }
         }   
    }

    setUpHelp();
