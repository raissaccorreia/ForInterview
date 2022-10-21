var plusOne = function(digits) {

    for (let i = digits.length - 1; i >= 0; i--){
        if (++digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    }
    return [1, ...digits]
}

console.log(plusOne([9]))
console.log(plusOne([1,0,9]))
console.log(plusOne([9,9,9]))
console.log(plusOne([1,1,1]))

/*
if(digits[len - 1] === 9) {
        for(let i = 0; i < digits.length - 2; i++){
            answer.push(digits[i])
        }
        answer.push(digits[digits.length - 2] + 1)
        answer.push(0)
    } else {
        for(let i = 0; i < digits.length - 1; i++){
            answer.push(digits[i])
        }
        answer.push(digits[len - 1] + 1)
    }
*/