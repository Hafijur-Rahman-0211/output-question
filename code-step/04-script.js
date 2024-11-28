// let z = [1, 2, 3, 4];
// let a = { name: 'anil' };
// console.warn(...z);

// Output:
// 1 2 3 4

// Explanation:
// The Spread Operator (...):

// The ... operator is called the spread operator in JavaScript.
// It is used to "spread" the elements of an array (or iterable) into individual elements.
// How it works in console.warn(...z):

// The array z contains [1, 2, 3, 4].
// When you use ...z, it "spreads" the array into its individual elements: 1, 2, 3, 4.
// These individual elements are passed to console.warn as separate arguments.
// Result:

// console.warn logs each of the elements as separate values, separated by spaces.
// Unrelated Object a:

// The object a is unrelated in this code. It does not affect the console.warn(...z) line.
// Key Point:
// The spread operator takes the array z and expands it into individual elements (1, 2, 3, 4), which are then logged separately by console.warn.