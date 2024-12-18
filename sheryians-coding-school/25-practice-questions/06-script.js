// function
// write a javascript function that reverse a number

function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// console.log(reverseNumber(12345)); // 54321

// ----------------------------------------------------------

function reverseNum(num) {
    let reversed = "";
    while (num > 0) {
        reversed += num % 10;
        num = Math.floor(num / 10);
    }
    return parseInt(reversed);
}

console.log(reverseNum(12345));
