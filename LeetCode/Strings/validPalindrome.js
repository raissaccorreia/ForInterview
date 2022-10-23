/**
 * @param {string} s, 1 <= s.length <= 2 * 10^5, consists only of ASCII characters
 * @return {boolean}
*/

var isPalindrome = function(s) {

    s = s.toLowerCase().replace(/[_\W]/g,'')

    for (let i = 0, j = s.length - 1; i <= j; i++, j--)
        if (s[i] !== s[j])
            return false

    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
//true

console.log(isPalindrome("race a car"))
//false

console.log(isPalindrome(" "))
//true

/*
 * s is an empty string "" after removing non-alphanumeric characters
 * Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 * for (let i = 0, j = s.length - 1; i <= j; i++, j--) a nice way to have two pointers in opposite directions
 * 
 * s.toLowerCase().replace(/[_\W]/g,'') removing white spaces and putting everything to lower case
*/