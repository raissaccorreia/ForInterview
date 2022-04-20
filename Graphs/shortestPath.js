const graph = {
    a: ['b', 'c'],
    b: ['c', 'd'],
    c: ['d'],
    d: ['e', 'g'],
    e: ['f'],
    f: [],
    g: [],
    h: []
}

const shortestPath = (graph, src, dst) => {

    const queue = [[src, 0]];
    const visited = new Set([src]);
    
    while(queue.length) {

        const [node, distance] = queue.shift();
        if (node === dst) return distance;

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
}

console.log(shortestPath(graph, 'a', 'a'));
console.log(shortestPath(graph, 'a', 'h'));
console.log(shortestPath(graph, 'a', 'g'));