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

const treeMinMax = (root) => {

    let smallest = Infinity;
    let biggest = 0;
    const stack = [root];
    
    while(stack.length) {
        const current = stack.pop();
        if(current.value < smallest) smallest = current.value;
        if(current.value > biggest) biggest = current.value;
        if(current.left){ stack.push(current.left)}
        if(current.right){ stack.push(current.right)}
    }
    return [smallest, biggest];
}

const treeMinRecursive = (root) => {
    if (root === null) return Infinity;
    const leftMin = treeMinRecursive(root.left);
    const rightMin = treeMinRecursive(root.right);
    return Math.min(root.value, leftMin, rightMin);
}

const treeMaxRecursive = (root) => {
    if (root === null) return 0;
    const leftMax = treeMaxRecursive(root.left);
    const rightMax = treeMaxRecursive(root.right);
    return Math.max(root.value, leftMax, rightMax);
}

console.log(treeMinMax(a, "a"));
console.log(treeMinRecursive(a, "a"));
console.log(treeMaxRecursive(a, "a"));
