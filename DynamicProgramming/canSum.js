//no memo version O(n^m) time and O(m) space
const canSum = (targetSum, numbers) => {

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true){
            return true;
        }
    }
    return false;
}

//memo version O(mn) time and O(m) space

const canSumMemo = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSumMemo(remainder, numbers) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

// tabulation
const canSumTab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}

console.log(canSumMemo(10, [1,2,3]));
console.log(canSumMemo(10, [1,2,3,4]));

