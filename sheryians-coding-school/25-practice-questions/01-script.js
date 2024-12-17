// GIven a string, reverse each word in the sentence 'hello world'

var str = "hello world";

var saverStr = str.split(" ").map(function (word) {
    return word.split("").reverse().join("");
});
console.log(saverStr.join(" "));
