const compareNumber = (num1, num2, num3) => {
    if (num3 === 'add') {
        console.log(num1 + num2);
    }
    else if (num3 === 'subtract') {
        console.log(num1 - num2);
    }
    else if (num3 === 'multiply') {
        console.log(num1 * num2);
    }
    else if (num3 === 'divide') {
        console.log(num1 / num2);
    }
    else if (num3 === 'modulus') {
        console.log(num1 % num2);
    }
    else {
        console.log('Invalid operation');
    }
}

compareNumber();