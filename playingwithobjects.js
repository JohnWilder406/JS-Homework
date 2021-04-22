var users = [{name: "Michael", age: 37}, {name: "John", age: 30}, {name: "David", age:27}];

// John's Age:
console.log(`John is ${users[1].age} years old`);

// Log the name of the first object:
console.log(users[0].name);

// Log the name of each user using a for loop:

function logTheUsers(users) {
    for (var i = 0; i < users.length; i++) {
        console.log(`${users[i].name} -- ${users[i].age}`);
    }
}

console.log(logTheUsers(users));
