var moveZeroes = function(nums) {

    let oldLength = nums.length

    for (let i = 0; i < oldLength; i++){
        if (nums[i] === 0) {
            nums.push(0)
        }
    }

    let count = 0
    let j = 0

    while (count < oldLength) {
        count += 1
        if (nums[j] === 0) {
            nums.splice(j, 1)
            j -= 1
        }
        j += 1
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))
//array.push(0) adicionará zero ao final
//array.splice(index, 1) remove 1 item na altura index

//making a more lean version

var moveZeroesLean = function(nums) {

    let beginZeros = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) { 
            nums[beginZeros++] = nums[i]
        }
        console.log(nums)
        console.log(beginZeros)
    }

    while (beginZeros < nums.length) {
        nums[beginZeros++] = 0
        console.log(nums)
        console.log(beginZeros)
    }

    return nums
}

console.log(moveZeroesLean([0,1,0,3,12]))
console.log(moveZeroesLean([0,0,1]))