// Create a Person class with constructor that takes name and age, and introduce method that logs:
// Hi, I am [name] and I am [age] years old.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

const john = new Person("John", 22);
john.introduce();
