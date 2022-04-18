
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

//impossible to run without memo
console.log(fibMemo(100));