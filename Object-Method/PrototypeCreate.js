//Creates a new object, using an existing object as prototype of the newly created object.

let student = {
    name: "Kumar",
    display() {
        console.log("Name:", this.name);
    }
};

//create object from student prototype
let std1 = Object.create(student);
std1.name = "Kishore";
std1.display(); //Name: Kishore