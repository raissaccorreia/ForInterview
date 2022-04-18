//no memo version O(n^m * m) time and O(m) space
const howSum = (targetSum, numbers) => {

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [...remainderResult, num];
        }
    }
    return null;
}

//memo version O(m^2 * n) time and O(m^2) space
const howSumMemo = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSumMemo(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSumMemo(7, [2,3]));
console.log(howSumMemo(300, [7,14]));
console.log(howSumMemo(8, [2,3,5]));