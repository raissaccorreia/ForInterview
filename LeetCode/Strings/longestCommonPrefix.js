/**
 * @param {string[]} strs, 1 <= strs.length <= 200, 0 <= strs[i].length <= 200, consists of only lowercase English letters.
 * @return {string}
 * 
 * More algorithm links:
 * https://www.geeksforgeeks.org/longest-common-prefix-using-character-by-character-matching/
 * https://www.geeksforgeeks.org/longest-common-prefix-using-divide-and-conquer-algorithm/
 * https://www.geeksforgeeks.org/longest-common-prefix-using-binary-search/
 * https://www.geeksforgeeks.org/longest-common-prefix-using-trie/
 */

var LCP1 = function(strs) {

    if (strs == 0) return ""
    if (strs == 1) return strs[0]

    strs.sort()
    let minLen = Math.min(strs[0].length, strs[strs.length-1].length), i = 0

    while (i < minLen && strs[0][i] == strs[strs.length-1][i]) i++

    if (i === 0) return ""
    else return strs[0].substring(0, i)
}

var LCP2 = function(strs) {

    if (strs == 0) return ""
    if (strs == 1) return strs[0]

    function prefixUtil (s1, s2) {
        let result = ""
        for (let i = 0, j = 0; i < s1.length && j < s2.length; i++, j++) {
            if (s1[i] != s2[j]) break
            result += s1[i]
        }
        return result
    }

    function commonPrefix (array, n) {
        let prefix = array[0]
        for (let i = 0; i <= n-1; i++)
            prefix = prefixUtil(prefix, array[i])
        return prefix
    }

    return commonPrefix(strs, strs.length)
}

console.log("1ST ALGORITHM -------")
console.log(LCP1(["flower","flow","flight"]))
// "fl"
console.log(LCP1(["dog","racecar","car"]))
// ""
console.log(LCP1(["geeksforgeeks", "geeks", "geek", "geezer"]))
// "gee"
console.log(LCP1(["apple", "ape", "april"]))
// "ap"

console.log("2nd ALGORITHM -------")
console.log(LCP2(["flower","flow","flight"]))
// "fl"
console.log(LCP2(["dog","racecar","car"]))
// ""
console.log(LCP2(["geeksforgeeks", "geeks", "geek", "geezer"]))
// "gee"
console.log(LCP2(["apple", "ape", "april"]))
// "ap"