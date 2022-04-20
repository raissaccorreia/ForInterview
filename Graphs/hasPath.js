const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

//just for acyclic graphs
const hasPath = (graph, src, dst) => {

    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst)) {
            return true;
        }
    }
    return false;
}

//just for acyclic graphs
const hasPathQueue = (graph, src, dst) => {

    const queue = [src];

    while (queue.length) {
        
        const current = queue.shift();
        if (current === dst) return true;

        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
}