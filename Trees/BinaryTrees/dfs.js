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

//left, root, right (inorder)
//root, left, right (preorder)
//left, right, root (postorder)
const DFSPreOrder = (root) => {
    const stack = [root];
    while(stack.length){
        const current = stack.pop();
        console.log(current.value);
        if(current.left){
            stack.push(current.left);
        }
        if(current.right){
            stack.push(current.right);
        }
    }
}

const DFSInOrder = (root) => {
    const stack = [root];
    while(stack.length){
        const current = stack.pop();
        if(current.left){
            stack.push(current.left);
        }
        console.log(current.value);
        if(current.right){
            stack.push(current.right);
        }
    }
}

const DFSPostOrder = (root) => {
    const stack = [root];
    while(stack.length){
        const current = stack.pop();
        if(current.left){
            stack.push(current.left);
        }
        if(current.right){
            stack.push(current.right);
        }
        console.log(current.value);
    }
}

DFSPreOrder(a);
DFSInOrder(a);
DFSPostOrder(a);