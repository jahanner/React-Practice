//Object destructuring

const person = {
  name: 'Jesse',
  age: 26,
  location: {
    city: 'kona',
    temp: 75
  }
};

const {name = 'Anonymous', age: edad} = person;
console.log(`${name} is ${edad}.`)

const {city, temp: temperature} = person.location;
if(city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);


///Array destructuring

const address = ['1299 S Juniper Street', 'Kona', 'HI', '20930'];

const[street, town, state, zip] = address;

console.log(`You are in ${town} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [Coffee, , medium] = item;

console.log(`A medium ${Coffee} costs ${medium}.`)
