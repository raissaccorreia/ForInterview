const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
]

const buildGraph = (edges) => {

    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const explore = (graph, current, visited) => {

    if (visited.has(current)) return false;
    visited.add(current);

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited)
    }
    return true;
}

const connectedComponentsCount = (graph) => {

    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count ++;
        }
    }
    return count;
}

const g = buildGraph(edges);
console.log(connectedComponentsCount(g));
console.log(connectedComponentsCount(graph));