// let data = 10 - -10;
// console.warn(data);
// Output: 
// 20

// Explanation:
// What happens in 10 - -10:

// The - - in the expression represents two consecutive minus operators.
// The first - is the subtraction operator.
// The second - is the unary negation operator, which changes the sign of the number following it.
// How JavaScript processes 10 - -10:

// -10 becomes +10 because the unary negation operator (-) flips the sign of 10.
// The expression effectively becomes:

// 10 - (-10) = 10 + 10 = 20
// Result:

// data is assigned the value 20.
// Key Point:
// The - - combination in JavaScript results in addition because the second minus flips the sign of the number, turning the subtraction into an addition.