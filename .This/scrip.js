function showMessage() {
    // "use strict";
    // console.log(this);
    // this.age = 99 //calling with new keyword
    console.log('Hey there!!!');
}
// Rule no 1 -> this will be window object if strict mode is off, else undefined
// showMessage()

// Rule no 2 -> this will be newly created object
// new showMessage()

const obj2 = {
    showMessage
}

//1
// showMessage()

//2
const obj = new showMessage() // run nahi kelay tri pn output ks kay distay ?
// const obj = showMessage() // run nahi kelay tri pn output ks kay distay ?

//3
// showMessage.call()

//4
// obj2.showMessage()


// let a = 12
// function lex() {
//     console.log(a);
//     const myArrow = () => {
//         console.log(a);
//     }
//     myArrow();
// }

// lex()

// function User(name) {
//     this.name = name;
//     return 1
// }

// const user1 = new User("Omkar"); // New instance is created
// const user2 = new User("Atish sir"); // New instance is created
// console.log(user1);
// console.log(user2);
// console.log(typeof (user1));

// const user3 = User('chetan')
// console.log(typeof (user3));

// console.log(User('chetan'));


const greet = function (data) {
    console.log(`Hello, Omkar!${data}`);
};

greet(' hello '); // Output: Hello, Omkar!
greet(' this is me '); 