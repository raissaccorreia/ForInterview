const graph = {
    a: ['b', 'c', 'd'],
    b: ['c', 'd'],
    c: ['d'],
    d: ['e', 'g'],
    e: ['f'],
    f: [],
    g: []
}

const exploreSize = (graph, node, visited) => {

    if (visited.has(node)) return 0;
    visited.add(node);
    let size = 1;

    for (let neighbor in graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }
    return size;
}

const largestComponent = (graph) => {

    let longest = 0;
    const visited = new Set();

    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > longest)
            longest = size;
    }
    return longest;
}

console.log(largestComponent(graph));