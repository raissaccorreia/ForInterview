//no memo version O(n^m * m) time and O(m) space
const bestSum = (targetSum, numbers) => {

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

//memo version O(m^2 * n) time and O(m^2) space
const bestSumMemo = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemo(remainder, numbers, memo)
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

//tabulation

const bestSumTab = (targetSum, numbers) => {

    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                if (!table[i + num] || table[i + num].length > combination.length){
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[targetSum];
}

console.log(bestSumMemo(7, [2,3]));
console.log(bestSumMemo(100, [1,2,5,25]));
console.log(bestSumMemo(8, [2,3,5]));