// Deleting Array Element Based on Object Property in JavaScript:
let arrayOfObjects = [
    { id: 1, name: 'Kishore' },
    { id: 2, name: 'Vijay' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Kamesh' }
]
//Delete Object with id 3
const objectIdToDelete = 3;
arrayOfObjects = arrayOfObjects.filter(obj => obj.id !== objectIdToDelete)
console.log(arrayOfObjects); 
/*  [
  { id: 1, name: 'Kishore' },
  { id: 2, name: 'Vijay' },
  { id: 4, name: 'Kamesh' }
] */