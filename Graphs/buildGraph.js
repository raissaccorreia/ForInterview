//bidirectional edges
const buildGraph = (edges, directional) => {

    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        if (!directional) graph[b].push(a);
    }

    return graph;
}