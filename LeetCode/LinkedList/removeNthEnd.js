/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head, Given the head of a linked list, remove the nth node from the end of the list and return its head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {

    let fakeHead = new ListNode( -1, head)
    let cur = fakeHead, prevOfRemoval = fakeHead

    while( cur.next != null ) {
        if( n <= 0 ) prevOfRemoval = prevOfRemoval.next
        cur = cur.next
        n -= 1
    }

    nThNode = prevOfRemoval.next
    prevOfRemoval.next = nThNode.next
    return fakeHead.next
}

console.log(removeNthFromEnd([1,2,3,4,5], 2))
// [1,2,3,5]
console.log(removeNthFromEnd([1], 1))
// []
console.log(removeNthFromEnd([1,2], 1))
// [1]