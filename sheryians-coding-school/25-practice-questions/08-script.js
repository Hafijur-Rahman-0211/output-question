// function 

// write a javascript function that return a passed string with letter in alphabetical order

function sortString(str) {
    return str.split("").sort().join("");
}   

console.log(sortString("hello"))