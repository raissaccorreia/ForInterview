const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

const exploreSize = (grid, x, y, visited) => {

    const rowInBound = x >= 0 && x < grid.length;
    const colInBound = y >= 0 && y < grid.length;
    if (!rowInBound || !colInBound) return 0;

    if (grid[x][y] === 'W') return 0;

    const pos = x + "," + y;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;
    size += exploreSize(grid, x + 1, y, visited);
    size += exploreSize(grid, x - 1, y, visited);
    size += exploreSize(grid, x, y + 1, visited);
    size += exploreSize(grid, x, y - 1, visited);

    return size;
}

const minimumIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;
    let maxSize = 0;

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid.length; c += 1) {
            const size = exploreSize(grid, r, c, visited)
            if ( size > 0 && size < minSize) minSize = size
            if ( size > 0 && size > maxSize) maxSize = size
        }
    }
    return [minSize, maxSize];
}

console.log(minimumIsland(grid));