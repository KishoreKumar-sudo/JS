//entries() returns an Array Iterator object with key/value pairs & dz mtd doesn't change the original array.

//syntax => array.entries()\

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
const day = days.entries()

for (let x of day) {
    console.log(x + "/n");
}