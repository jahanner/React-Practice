class Person{
  constructor(name = 'Anonymous', age = 0) {
    this.name = name; //initializing name and age to be accessed
    this.age = age;
  }
  getGreeting(){
    return `I'm ${this.name} yo!`;
  }
  getDescription() {
    return `Yo, ${this.name} is ${this.age != 0 ? this.age: undefined} year(s) old!`;
  }
}

class Student extends Person {
  constructor(name , age, major) {
    super(name, age); //calling parent constructor
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription(); //super is calling to parent getDescription so it can be used or modified

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation){
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('J-Money', 26, 'New Zealand');
console.log(me.getGreeting());

const newPerson = new Traveler();
console.log(newPerson.getGreeting());
