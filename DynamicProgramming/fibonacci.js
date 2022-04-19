
/*without memo version
O(2^n) performance complexity and O(n) space complexity */

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

/*with memo version
O(n) performance complexity and O(n) space complexity */

const fibMemo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

// tabulation
const fibTab = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}

//impossible to run without memo
console.log(fibMemo(100));