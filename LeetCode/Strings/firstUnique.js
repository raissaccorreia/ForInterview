/**
 * @param {string} consists of only lowercase English letters. 1 <= s.length <= 10^5
 * @return {number}
 */
 var firstUniqChar = function(s) {

    for (let i=0; i < s.length; i++) 
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i]))
            return i

    return -1
};

var firstUniqCharHashMap = function(s) {

    let map = new Map()

    for (let i=0; i<s.length; i++) {
        if (map.has(s[i])) map.set(s[i],2)
        else map.set(s[i],1)
    }

    for (let i = 0; i<s.length; i++) {
        if(map.has(s[i]) && map.get(s[i]) === 1) return i
    }

    return -1
}

console.log(firstUniqChar("leetcode"))
console.log(firstUniqCharHashMap("leetcode"))
// 0

console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqCharHashMap("loveleetcode"))
// 2

console.log(firstUniqChar("aabb"))
console.log(firstUniqCharHashMap("aabb"))
// -1