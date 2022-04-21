class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeSum = (root) => {

    let count = 0;
    const queue = [root];
    
    while(queue.length) {
        const current = queue.shift();
        count += current.value;
        if(current.left){ queue.push(current.left)}
        if(current.right){ queue.push(current.right)}
    }
    return count;
}

const treeSumRecursive = (root) => {
    if (root === null) return 0;
    return root.value + treeSumRecursive(root.left) + treeSumRecursive(root.right);
}

console.log(treeSum(a, "a"));
console.log(treeSumRecursive(a, "a"));