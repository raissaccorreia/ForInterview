const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const bfs = (graph, start) => {
    
    const queue = [start];

    while (queue.length) {
        const vertex = queue.shift();
        console.log(vertex);
        for (let neighbor of graph[vertex]) {
            queue.push(neighbor);
        }
    }
}

bfs(graph, "a");