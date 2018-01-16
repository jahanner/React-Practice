import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';




ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//   }
//   getGreeting() {
//     return `HI, my name is ${this.name}`;
//   }
// }
//
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = "Jesse";
//   getGreeting = () => {
//     return `HI, my name is ${this.name}`;
//   }
// }
//
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
