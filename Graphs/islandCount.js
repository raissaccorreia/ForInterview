const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

const explore = (grid, x, y, visited) => {

    const rowInBound = x >= 0 && x < grid.length;
    const colInBound = y >= 0 && y < grid.length;
    if (!rowInBound || !colInBound) return false;

    if (grid[x][y] === 'W') return false;

    const pos = x + "," + y;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, x + 1, y, visited);
    explore(grid, x - 1, y, visited);
    explore(grid, x, y + 1, visited);
    explore(grid, x, y - 1, visited);

    return true;
}

const islandCount = (grid) => {

    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid.length; c += 1) {
            if(explore(grid, r, c, visited)) count += 1;
        }
    }

    return count;
}

console.log(islandCount(grid));