var twoSum = function(nums, target) {

    //nums.sort()

    for(let i = 0; i < nums.length; i++){
        let candidate = nums[i]
        let diff = target - candidate
        if (nums.indexOf(diff) === -1) {
            continue
        } else if (nums.indexOf(diff) === i) {
            continue
        } else {
            return [i, nums.indexOf(diff)]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))