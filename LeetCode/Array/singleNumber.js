var singleNumber = function(nums) {
    let x = 0
    nums.forEach(n => {
        x ^= n
    })
    return x
};

console.log(containsDuplicate([1,1,2,2,3]))
console.log(containsDuplicate([1,1,2,2,3,3]))