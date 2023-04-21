//entries() returns an Array Iterator object with key/value pairs & dz mtd doesn't change the original array.

//syntax => array.entries()\

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
const day = days.entries()

//for of => const iterator of object

for (let x of day) {
    console.log(x + "\n");
}

/*  Expeected O / P:
0, sun
1, mon
2, tue
3, wed
4, thu
5, fri
6, sat */

