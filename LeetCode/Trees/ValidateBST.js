/**
 * Definition for a binary tree node.
 * 
 * The number of nodes in the tree is in the range [1, 10^4]
 * -2^31 <= Node.val <= 2^31 - 1
 * 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var validate = function(root, low, high) {

    if (!root) return true

    if ((low && root.val <= low) || (high && root.val >= high)) return false

    return validate(root.right, root.val, high) && validate(root.left, low, root.val)
}

var isValidBST = function(root) {
   return validate(root, null, null)
}

console.log(isValidBST([2,1,3]))
console.log(isValidBST([5,1,4,null,null,3,6]))