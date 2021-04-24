
// Print Values and Sum

// Print each array value and the sum so far
// The expected output will be: 

// var testArr = [6, 3, 5, 1, 2, 4]
// sum = 0;

// for (let i = 0; i < testArr.length; i++){
//     sum += testArr[i];
//     console.log('Value:', testArr[i], 'Sum:', sum)
// }


Value * Position

Multiply each value in the array by its array position
The expected output will be:

var testArr = [6, 3, 5, 1, 2, 4]

for(let i=0; i<testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);