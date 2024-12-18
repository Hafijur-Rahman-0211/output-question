// function 

// write a javascript function that accept a string as a parameter and convert the first letter of each word of the string in upper case

function upperCase(str) {
    return str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

console.log(upperCase("hello world")); // Output: "Hello World"