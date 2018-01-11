const nameVar = 'Jesse';
nameVar = "Yo";
console.log('nameVar', nameVar);

const nameLet = 'Jen';
nameLet = 'Jesse now';
console.log('nameLet', nameLet);

const nameConst = 'Const';
console.log('nameConst', nameConst);

const fullName = 'Jesse Hanner';
let firstName;

if(fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
