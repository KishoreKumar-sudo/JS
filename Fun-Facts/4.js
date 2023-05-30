//the following syntax provides both the index & value when iterating over an array

const arr = ['foo', 'bar', 'baz'];

for (const [key, value] of arr.entries()) {
    console.log(key, value);
}

/* 0 foo
1 bar
2 baz
 */