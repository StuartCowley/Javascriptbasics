const createPerson = (name, age) => {
  return {
    name:name,
    age:age
  };
};

const getName = object => {
  return object.name;
  };

const getProperty = (property, object) => {
  return object[property];
};

function hasProperty(property, object) {
  return object.hasOwnProperty(property);
}

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  for (let step = 0; step < 5; step++) {
    return people.age;
  }// let ageToLog= people.age
  // return ageToLog;
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
