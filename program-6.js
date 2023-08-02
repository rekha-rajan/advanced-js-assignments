function filterArrByEvenOrOdd(arr, callback) {
    const arrFilterd = arr.filter(element => callback(element))
    return arrFilterd;
}
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return true;    
    } else {
        return false;
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterdArray = filterArrByEvenOrOdd(numbers, isEvenOrOdd);
console.log("Even numbers:", filterdArray);


