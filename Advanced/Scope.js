/* 'Global Scope' */
const PIE=3.14;

function foo(){
    console.log(PIE);

    /* function scope */
    const age=32;
    console.log(age);
} 

/* Block Scope */
if (true) {
    const fullName='Kishore Kumar';
    console.log(fullName);//Kishore Kumar
}