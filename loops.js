for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ['peter', ' nino', 'pollo'];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]); /* accessing object diynamicly */
}

 let isFinished = false;

while (!isFinished) {
  isFinished = confirm('do you want to quite?'); /* built in notificaiton */
} 

console.log('All good');
