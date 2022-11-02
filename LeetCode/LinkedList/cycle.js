/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {

    let pointer = head

    while (pointer && pointer.next) {
      head = head.next
      pointer = pointer.next.next
      if (head === pointer) return true
    }

    return false
}