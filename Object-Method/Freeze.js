//Freezes an object, a frozen object can no longer be changed this means:

/* 1.New Properties from being added to the object.
   2.Existing properties to be removed from object.
   3.Changing the enumberability, configurability or writablity of existing properties.
   4.Changing values of the existing properties & prototype.
*/
const client={
    budget:3000
};

Object.freeze(client);
client.budget=2500; //shows error in strict mode

console.log(client.budget); //3000
