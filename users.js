const users = {
  a1: {
    id: 'a1',
    username: 'luigi',
    email: 'luigi@nintendo.com',
  },
  a2: {
    id: 'a2',
    username: 'mario',
    email: 'mario@nintendo.com',
  },
  a3: {
    id: 'a3',
    username: 'peach',
    email: 'peach@nintendo.com',
  },
};

const userList = [
  {
    id: 'a1',
    username: 'luigi',
    email: 'luigi@nintendo.com',
  },
  {
    id: 'a2',
    username: 'mario',
    email: 'mario@nintendo.com',
  },
  {
    id: 'a3',
    username: 'peach',
    email: 'peach@nintendo.com',
  },
]

// what's the value of a user with id  = a2?
// object name: users
// key name: 'a2'
// objectName.key

// console.log("key: a2 > ",users.a2);

// print the email of the value associate with the key 'a2'
console.log("email of a2:", users.a2.email);


// add a score property on for Mario
users.a2.score = 3000;
console.log("key: a2 > ",users.a2);

// print out all the usernames
// for in => iterating over the keys
// does not give you the value by default

for (let userId in users) {
  // the key name is stored in a variable=> userId
  console.log("key:", userId);
  console.log("username:", users[userId].username);
  // or console.log("username:", users[userId]['username']);
}

// this keyword => never us it, unless you have to! for a good reason!

// Making the object into an array
// Object.keys(nameOfObject) or Object.values(nameOfObject)
// we can use array methods
console.log("Array of users:", Object.values(users));


