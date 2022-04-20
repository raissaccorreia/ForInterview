const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const dfs = (graph, start) => {
    
    const stack = [start];

    while (stack.length) {
        const vertex = stack.pop();
        console.log(vertex);
        for (let neighbor of graph[vertex]) {
            stack.push(neighbor);
        }
    }
}

dfs(graph, "a");