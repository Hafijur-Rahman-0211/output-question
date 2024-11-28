// const data = { name: 'Hafijur' }; 
// console.warn(delete data);
// Output: 
// false

// Explanation:
// The delete Operator:

// The delete operator is used to remove properties from an object.
// It does not work to delete the object itself, even if the object is stored in a variable or constant.
// What happens in this code:

// delete data tries to delete the data object itself.
// However, delete can only delete properties of objects, not the object itself. Since data is a variable holding an object, it cannot be deleted using delete.
// Return value of delete:

// The delete operator returns false when it is unable to delete the variable or constant itself (i.e., it cannot delete data).
// Key Points:
// delete can only delete properties from objects, not variables.
// Since data is a reference to an object, attempting to delete data itself will return false. The object data still exists.
// Example of Correct Usage:
// To delete a property from the object:
 
// const data = { name: 'Hafijur' };
// console.warn(delete data.name); // true, 'name' property will be deleted
// console.warn(data); // {} (empty object)