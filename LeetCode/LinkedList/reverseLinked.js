/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseListIterative = function(head) {

    let newHead = null

    while (head != null) {
        let next = head.next
        head.next = newHead
        newHead = head
        head = next
    }

    return newHead
}

var reverseListRecursive = function(head) {

    var reverseListInt = function(head, newHead) {
        if (head == null) return newHead
        let next = head.next
        head.next = newHead
        return reverseListInt(next, head)
    }
    
    return reverseListInt(head, null)
}

console.log(reverseList([1,2,3,4,5]))
// [5,4,3,2,1]
console.log(reverseList([1,2]))
// [2,1]
console.log(reverseList([]))
// []