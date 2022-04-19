
//no memo version, exponencial time complexity
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
}

//memo version
const gridTravelerMemo = (m, n, memo = {}) => {
    const key = m + "," + n;
    if (memo[key]) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m-1, n) + gridTraveler(m, n-1);
    return memo[key];
}

//tabulation
const gridTravelerTab = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }
    return table[m][n];
}

console.log(gridTravelerMemo(10, 10));