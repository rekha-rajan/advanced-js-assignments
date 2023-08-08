// import add from './math-esm-pattern-1.mjs';
// console.log(add(5, 5));

// import math from './math-esm-pattern-2.mjs';
// console.log(math.add(5, 5));
// console.log(math.subtract(50, 5));

/**destructring */
// const {add, subtract} = math; 
// console.log(math.add(5, 5));
// console.log(math.subtract(50, 5));

// import * as math from './math-esm-pattern-2.mjs';
// const {add, subtract} = math; 
// console.log(add(5, 5));
// console.log(subtract(50, 5));

import {add, subtract} from './math-esm-pattern-2.mjs';
// const {add, subtract} = math; 
console.log(add(5, 5));
console.log(subtract(80, 5));