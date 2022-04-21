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

const treeIncludes = (root, target) => {

    if (root === null) return false;
    const queue = [root];
    
    while(queue.length) {
        const current = queue.shift();
        if(current.value === target) return true;
        if(current.left){ queue.push(current.left)}
        if(current.right){ queue.push(current.right)}
    }
    return false;
}

const treeIncludesRecursive = (root, target) => {

    if (root === null) return false;
    if(root.value === target) return true;
    return treeIncludesRecursive(root.left, target) || treeIncludesRecursive(root.right, target);
}

console.log(treeIncludes(a, "d"));
console.log(treeIncludes(a, "g"));

console.log(treeIncludesRecursive(a, "d"));
console.log(treeIncludesRecursive(a, "g"));