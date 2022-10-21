/**
 * @param {number} x
 * @return {number}
 */

/* var reverse = function(x) {
    let s = x.toString()
    let i = 0, j = s.length - 1
    while (i < j) [s[j--], s[i++]] = [s[i], s[j]]
    return s
};*/

var reverse = function(x) {

    const reversedNumber = Math.abs(x).toString().split('').reverse().join('')

    if (reversedNumber > 2147483647) {
        return 0
    }

    return x < 0 ? -Math.abs(reversedNumber) : reversedNumber
}

var x = 123
console.log(reverse(x))
// 321

var x = -123
console.log(reverse(x))
// -321

var x = 120
console.log(reverse(x))
// 21
