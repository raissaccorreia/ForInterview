class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const BFS = (root) => {

    if (root === null) return [];
    const values = [];
    const queue = [root];
    
    while(queue.length) {
        const current = queue.shift();
        values.push(current.value);
        if(current.left){ queue.push(current.left)}
        if(current.right){ queue.push(current.right)}
    }
    return values;
}

console.log(BFS(a));