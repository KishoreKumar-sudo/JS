const removekey = (key, obj) => {
    const { [key]: omitted, ...res } = obj
    return res
};
console.log(removekey("bar", { foo: 1, bar: 2 })); //{ foo: 1 }