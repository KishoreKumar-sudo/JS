const person = {
    name: 'John',
    age: 30,
    gender: 'Male'
};

const jobObject = {
    job: 'Developer',
    salary: 1000
};

//get all object keys
console.log(Object.keys(person)); //[ 'name', 'age', 'gender' ]

//get all object values
console.log(Object.values(person)); //[ 'John', 30, 'Male' ]
