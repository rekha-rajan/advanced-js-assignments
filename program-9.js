
/**Find Sum of Numbers */
function sum(...rest){
    let tot = 0;
    for (const arg of rest) {
        tot += arg;
    }
    return tot;
}

console.log('total: ' + sum(12, 3, 4, 5, 78));


/**Find Largest Number */
function findLargest(rest) {
    console.log(...rest);
    return Math.max(...rest);
}

console.log('Largest Number: ' + findLargest([12, 542, 4, 5, 78]));
