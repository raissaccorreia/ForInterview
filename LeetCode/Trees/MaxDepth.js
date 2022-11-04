/**
 * Definition for a binary tree node.
 * The number of nodes in the tree is in the range [0, 10^4].
 * -100 <= Node.val <= 100
 * 
 * Time Complexity = O(number nodes)
 * Space Complexity = O(tree height)
 * 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    if(!root) return 0
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
    return Math.max(leftDepth, rightDepth) + 1
}

console.log(maxDepth([3,9,20,null,null,15,7]))
console.log(maxDepth([1,null,2]))