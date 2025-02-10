// var student = "Vangel"; // Global scope variable

// greet();

// function greet() {
//   const test = "Testing";
//   if (true) {
//     var newStudent = "Stuart";
//     console.log("new student", newStudent);
//     console.log("test", test);
//   }
//   console.log("new student", newStudent);
//   console.log("test", test);
// }

// x = 4;

// let x; // provides an error
// var x; // works

// console.log("x", x);

// function first() {
//   const test = "I am testing";
//   function second() {
//     const newVar = "hello";
//     return test;
//   }

//   return second;
// }

// Example 1
// "use strict";

// function strictFunction() {
//   x = 4;
// }

// strictFunction();

// In between

// Example 2 - Array methods

const array = [1, 2, 3, 4, 5, 6];
// for (i = 0; i < array.length; i++) {
//   sum += array[i];
//   // sum = sum + array[i]
// }
let sum = 0;

array.forEach((num) => {
  sum += num;
});

// console.log("sum", sum);

const newMappedArray = array.map((num) => num > 2);

// console.log("newMappedArray", newMappedArray);

const myArrowFun = () => 1 + 1;
const funExp = function () {
  return 1 + 1;
};

function sumTwoNumbers() {
  return 1 + 1;
}

// console.log(myArrowFun());
// console.log(funExp());
// console.log(sumTwoNumbers());

const filteredArray = array.filter((num) => num > 2);

// console.log("filteredArray", filteredArray);

const summedNums = array.reduce((acc, curr) => (acc += curr), 0);

// console.log("summed with reduce", summedNums);

const everyNum = array.every((num) => num > 0);

// console.log("every number is bigger than zero", everyNum);

const someNum = array.some((num) => num > 5);

// console.log("Some number is bigger than zero", someNum);

// Example 3 - Object methods

const human = {
  name: "John",
  age: 20,
};

const keys = Object.keys(human);
const values = Object.values(human);
const entries = Object.entries(human);

// console.log("keys", keys);
// console.log("values", values);
// console.log("entries", entries);

// Example 4 - JSON

const person = {
  firstname: "Vangel",
  lastname: "Hristov",
};

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person["lastname"]);

function accessKey(obj, myKey) {
  return obj[myKey];
}

// console.log(accessKey(person, "lastname"));

const personToJson = JSON.stringify(person); // parsed to JSON

// console.log("person to json", personToJson);

const someJson = `{ "firstname": "Vangel", "lastname": "Hristov" }`;

const parsedJSON = JSON.parse(someJson); // parsed to JS object
// console.log(parsedJSON);

// Example 5 - Function bind -

const newPerson = {
  firstname: "John",
  lastname: "Doe",
  fullname: function () {
    // return this.firstname + " " + this.lastname;
    return `${this.firstname} ${this.lastname}`;
  },
};

const anotherPerson = {
  firstname: "Jane",
  lastname: "Doe",
};

const fullname = newPerson.fullname.bind(anotherPerson);
// console.log(fullname());

// Example 6 - Callback

const studentLeft = false;
const studentIsNotHere = false;

function useCallback(callback, errorCallback) {
  if (studentLeft) {
    errorCallback({
      name: "Student left",
      message: ":(",
    });
  } else if (studentIsNotHere) {
    errorCallback({
      name: "Student was never here",
      message: ":'(",
    });
  } else {
    callback("Student is still learning!");
  }
}

// useCallback(() => {}, () => {})
useCallback(
  (message) => console.log(message),
  (error) => console.log(`Error: ${error.name} ${error.message}`)
);

useCallback(successMessage, errorMessage);

// Reference vs calling a function
const newFun = useCallback;
newFun();

function successMessage(message) {
  console.log(message);
}

function errorMessage(error) {
  console.log(`Error: ${error.name} ${error.message}`);
}
