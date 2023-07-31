const isPlainObj = obj =>
typeof obj === 'object' && obj !== null && !Array.isArray(obj);
console.log(isPlainObj({ a: 1 }));
console.log(isPlainObj([1, 2, 3]))