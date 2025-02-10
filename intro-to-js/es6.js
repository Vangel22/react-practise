// Exercise 1 - let & const

const { retry } = require("@reduxjs/toolkit/query");

let myName = "Vangel";
console.log(myName);

myName = 1;
console.log(myName);

function letAndConstExample() {
  if (true) {
    let blockScopedLet = "Hello from let";
    const blockScopedConst = "Hello from const";

    console.log(blockScopedLet);
    console.log(blockScopedConst);
    var myVar = "Hello from var"; // it has a function scope
  }
  console.log(myVar);
}

letAndConstExample();

// Example 2 - default params

// function sum(a = 2, b = 1) {
//   return a + b;
//   //   return a + undefined
// }

// console.log(sum(1));

// Spread operator - expands an array

const numbers = [1, 2, 3, 4, 5, 6];
const letters = ["a", "b", "c"];

const mixed = [...numbers, ...letters];

console.log(mixed);

const firstObj = {
  name: "Vangel",
};

const secondObj = {
  name: "John",
  age: 25,
};

const combineObj = {
  ...firstObj,
  ...secondObj,
};

// const body = {
//     ...req.body,
//     createdBy: someAuthService
// }

console.log(combineObj);

// Example 4 - Rest operator

function multiply(multiplier, ...args) {
  return args.map((element) => multiplier * element);
}

console.log(multiply(2, 1, 2, 3, 4, 5));

// Example 5 - Destructuring

const person = {
  name: "Vangel",
  age: 25,
};

// person.name
// person["name"]
const { name, age } = person;
console.log("name & age ", name, age);

// import/export
// const ex = require("")

// Example 6 - Template literals
console.log(`Hi, ${person.name}! I am ${person.age}`);

// Example 7 - Arrow functions
// const arrowFun = () => 1 + 1;
const arrowFun = () => {
  if (true) {
    return 1 + 1;
  }
};

console.log(arrowFun());

// Example 8 - Promises - fullfilled, pending, rejected
const myPromise = new Promise((success, fail) => {
  let result = 1 + 1;
  if (result !== 2) {
    success("Result is 2");
  } else {
    fail("Result is rejected");
  }
});

myPromise.then((msg) => console.log(msg)).catch((err) => console.log(err));
//   .finally(() => console.log("This block is always executed!"));

// ES7 - Async and await

async function myAsyncFun() {
  try {
    await myPromise();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("I am in finally");
  }
}

// Classes

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log("Speaking", this.name);
// };

// const dog = new Animal("dog");
// dog.speak();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Speaking", this.name);
  }
}

const dog = new Animal("dog");
dog.speak();
