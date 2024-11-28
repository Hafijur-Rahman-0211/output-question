// let a = [];
// let b = a;
// console.warn(a == b);  // Loose equality comparison
// console.warn(a === b); // Strict equality comparison

// Output: 
// true
// true

// Explanation:
// Assignment creates a reference:

// When you write let b = a;, the variable b points to the same memory location as a. Both a and b now refer to the same array.
// a == b (Loose equality):

// Loose equality (==) checks if a and b refer to the same object.
// Since b was assigned to a, they share the same reference, so the result is true.
// a === b (Strict equality):

// Strict equality (===) also checks if a and b refer to the same object in memory.
// Again, since both point to the same array, the result is true.
// Key Point:
// In this case, b is not a new array but a reference to the same array a. Both comparisons return true because they are literally the same object in memory.