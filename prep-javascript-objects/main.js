var person = {
  firstName: 'Bob',
  lastName: 'Marley',
  hobby: 'singing'
};
console.log(person);

var fullName = 'The person\'s name is: ' + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'singer and songwriter';
console.log('The person\'s job was: ' + person.job + '.');

person.previousJob = 'plantation overseer';
console.log('The person\'s previous job was: ' + person.previousJob + '.');

console.log(person);
