/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */

//time limit
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
}

//time limit
var rotate2 = function(array, rotateBy) {
    rotateBy %= array.length
    if (rotateBy < array.length - rotateBy) {
        while (rotateBy--) { 
            array.unshift(array.pop())
        }
    } else {
        rotateBy = array.length - rotateBy
        while (rotateBy--) {
            array.push(array.shift())
        }
    }
}

//optimized
var rotate3 = function(nums, k) {
    if (k > nums.length) {
        k = k-(Math.floor(k/nums.length) * nums.length)
    }
    nums.splice(0,0,...nums.splice(-k,k))
}

var rotate4 = function(nums, k) {
    if (k > nums.length) {
        k = k-(Math.floor(k/nums.length) * nums.length)
    }
}

let nums = [1,2,3,4,5,6,7]
let k = 3
rotate3(nums, k)
console.log(nums)
