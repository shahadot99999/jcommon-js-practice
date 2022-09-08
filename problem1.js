//1) If I write []==true, will it show true or false? check it now?

const x = [] == true;
console.log(x);
if (x) {
    console.log('value of [] is truthy');
}
else {
    console.log('value of [] is falsy');
}

//2) Use === to check if the true ==="true" gives true or false
// let y = true === "true";
// //console.log(y);
// if (y) {
//     console.log('value of y is truthy');
// }
// else {
//     console.log('value of y is falsy');
// }
let y = true
if (y === 'true') {
    console.log('value of y is truthy');
}
else {
    console.log('value of y is falsy');
}


// Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.
const number1 = 12;
if (isNaN(number1)) {
    console.log(number1 + " is not a number");
} else {
    console.log(number1 + " is a number");
}
