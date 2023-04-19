// Takes an object & returns its own enumberable string - keyed property[key, value] pairs of the object

const drinks = {
    maple: 'out of stack',
    orange: 3.5
}

for (const [name, cost] of
    Object.entries(drinks)) {
    console.log(`${name}: ${cost}`);
}   //maple: out of stack
    //orange: 3.5