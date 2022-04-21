class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const maxTreeSum = (root) => {

    if (root === null) return -Infinity;
    if (root.left === null && root.right == null) return root.value;

    const maxChild = Math.max(maxTreeSum(root.left), maxTreeSum(root.right));

    return root.value + maxChild;
}

console.log(maxTreeSum(a));