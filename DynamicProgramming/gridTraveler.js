
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

console.log(gridTravelerMemo(10, 10));