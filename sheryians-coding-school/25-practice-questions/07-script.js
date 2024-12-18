// function

// write a javascript function that check whether a passed string is palindrome or not

function checkPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    if (str === reversed) return true;
    else return false;
}

console.log(checkPalindrome("poop"));
