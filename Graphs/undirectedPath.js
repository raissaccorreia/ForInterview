const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
]

//bidirectional edges
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

//support cycled graph
const hasPath = (graph, src, dst, visited) => {
    
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited)) {
            return true;
        }
    }
    return false;
}

const undirectedPath = (graph, src, dst) => {
    const g = buildGraph(edges);
    return hasPath(g, src, dst, new Set());
}

console.log(undirectedPath(edges, "i", "j"));