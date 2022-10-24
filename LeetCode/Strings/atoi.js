/**
 * @param {string} s, 0 <= s.length <= 200
 * @return {number}
 * converts a string to a 32-bit signed integer (similar to C/C++'s atoi function)
 * Read in and ignore any leading whitespace.
 * Check if the next character (if not already at the end of the string) is '-' or '+'. 
 * Read this character in if it is either. This determines if the final result is negative or positive respectively. 
 * Assume the result is positive if neither is present.
 * Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
 * Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. 
 * Change the sign as necessary (from step 2).
 * If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. 
 * Specifically, integers less than -231 should be clamped to -231, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
 * Return the integer as the final result.
 * Note: Only the space character ' ' is considered a whitespace character.
 * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 */

var myAtoi = function(s) {

    let i = 0, num = 0,isNegative = false

    //left white spaces
    while (s[i] === ' ') i += 1

    //sign
    if (s[i] === '+' || s[i] === '-') {
        isNegative = s[i] === '-'
        i += 1
    }

    //write number and stop if invalid
    while (i < s.length ) {
        const code = s.charCodeAt(i) - 48
        if (code < 0 || code > 9) break
        num *= 10
        num += code
        i += 1
    }

    //write sign
    if (isNegative) num = -num

    //deal with int32 range
    return Math.max(-(2**31), Math.min(2**31 - 1, num))
}

var otherAtoi = function(s) {

    const trimLeadingWhitespace = (str) => {
        while (str[0] === ' ') str.shift()
        return str
    }

    const enforceBound = (val, lower, upper) => {
        if (val < lower) return lower
        if (val > upper) return upper
        return val
    }

    const parseNumber = (str) => {

        let result = 0
        while (str.length) {

            const char = str.shift()
            if ([' '].includes(char)) return result

            const digit = Number(char)
            if (isNaN(digit)) return result
            else result = result * 10 + digit
        }
        return result
    }

    let isNegative = 1
    let number = 0
    let str = trimLeadingWhitespace(Array.from(s))
  
    if (['-', '+'].includes(str[0])) {
        isNegative = Number(`${str[0]}1`)
        str.shift()
    }

    number = isNegative * parseNumber(str)
    return enforceBound(number, -Math.pow(2, 31), Math.pow(2, 31) - 1);
}

var ultraShortAtoi = function(s) {
    return Math.max(-(2**31), Math.min(2**31 - 1, parseInt(s)))
}

console.log(myAtoi("42"))
// 42
console.log(myAtoi("   -42"))
// -42
console.log(myAtoi("4193 with words"))
//4193

console.log(otherAtoi("42"))
console.log(otherAtoi("   -42"))
console.log(otherAtoi("4193 with words"))

console.log(ultraShortAtoi("42"))
console.log(ultraShortAtoi("   -42"))
console.log(ultraShortAtoi("4193 with words"))