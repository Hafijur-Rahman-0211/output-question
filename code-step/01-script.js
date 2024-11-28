// let a = [];
// let b = [];
// console.warn(a == b); // Loose equality comparison
// console.log(a === b); // Strict equality comparison

// Output: 
// false
// false

// Explanation:
// Arrays in JavaScript are objects. When you compare objects (including arrays), JavaScript checks if they refer to the same location in memory, not if their contents are the same.

// a == b (Loose equality):

// Loose equality (==) tries to convert values to the same type before comparison.
// However, for objects (including arrays), it still checks reference equality (i.e., if both variables point to the exact same array in memory).
// a and b are two different arrays stored in different memory locations, so the result is false.
// a === b (Strict equality):

// Strict equality (===) does not perform type conversion and directly checks for reference equality.
// Since a and b are not the same object, the result is also false.
// Key Point:
// Even though a and b are both empty arrays, they are different objects in memory. Therefore, both == and === return false.