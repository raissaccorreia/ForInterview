/**
 * @param {string} haystack, 1 <= haystack.length, needle.length <= 104
 * @param {string} needle, haystack and needle consist of only lowercase English characters
 * @return {number}
 */

var strStr = function(haystack, needle) {

    //exceptions
    if (needle.length == 0) return 0
    if (haystack.length == 0) return -1

    for (let i = 0; i < haystack.length; i++) {

        if (i + needle.length > haystack.length) break

        for (let j = 0; j < needle.length; j++) {
            if (haystack.charAt(i + j) != needle.charAt(j)) break
            if (j == needle.length - 1) return i
        }
    }
    return -1
}

var fasterStrStr = function(haystack, needle) {

    for (let i = 0; i < haystack.length - needle.length + 1; i++)
        if (haystack.slice(i,i + needle.length) === needle) return i

    return -1
}

console.log(strStr("sadbutsad", "sad"))
// 0
console.log(strStr("leetcode", "leeto"))
//-1
console.log(strStr("muchlongerhelloworldbutitsinonlyonelanguage", "age"))
//40

console.log(fasterStrStr("sadbutsad", "sad"))
console.log(fasterStrStr("leetcode", "leeto"))
console.log(fasterStrStr("muchlongerhelloworldbutitsinonlyonelanguage", "age"))
