/**
 * @param {string} s, 1 <= s.length, t.length <= 5 * 10^4
 * @param {string} t, s and t consist of lowercase English letters.
 * @return {boolean}
 */

var isAnagram = function(s, t) {

    let dict = new Map()

    for (let char of s) dict[char] = (dict[char] || 0) + 1
    for (let char of t) if (!dict[char]--) return false

    return Object.values(dict).every(value => !value)
}

console.log(isAnagram("anagram", "nagaram"))
//true

console.log(isAnagram("rat", "car"))
//false

console.log(isAnagram("ab", "a"))
//false

/*
* if last line is just "return true" it doesn't pass this last test case
* dict[char] || 0) + 1 is an easy counter to how many times this char has appeared
* then on T loop it decrements every time chat appears
* and on the last line check it all for cases like the last one
*/