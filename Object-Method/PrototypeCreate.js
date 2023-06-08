//Creates a new object, using an existing object as prototype of the newly created object.

let student = {
    name: "fuzzy",
    display() {
        console.log("Name:", this.name);
    }
};

let std1 = Object.create(student)