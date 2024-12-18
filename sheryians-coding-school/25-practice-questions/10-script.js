// function

// write a javascript function to get the number of occurrences of each letter in a specified string

function countLetter(str) {
    var occurrences = {};
    str.split("").forEach(function (element) {
        if (occurrences.hasOwnProperty(element) === false) {
            occurrences[element] = 1;
        } else {
            occurrences[element]++;
        }
    });
    return occurrences;
}

console.log(countLetter("hello"));
