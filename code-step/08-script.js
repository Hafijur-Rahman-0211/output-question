// let data = { name: 'Hafijur' };
// console.warn(delete data.name);
// Output: 
// true

// Explanation:

// What does delete do?
// The delete operator is used to remove a property from an object.

// Behavior in this case:
// The object data initially has a property name with the value 'Hafijur'.
// delete data.name attempts to remove the name property from the object.
// Return value of delete:

// The delete operator returns:
// true if the property was successfully removed, or if the property did not exist in the first place.
// false if the property could not be deleted (e.g., it is a non-configurable property).
// Resulting Object:

// After delete data.name, the data object no longer has the name property.
// The object becomes an empty object {}.
// Final State of data:
// console.log(data); // {}
// Key Point:
// The delete operator successfully removes the property and returns true.