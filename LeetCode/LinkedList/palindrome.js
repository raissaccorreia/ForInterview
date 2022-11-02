/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head, The number of nodes in the list is in the range [1, 10^5]. 0 <= Node.val <= 9
 * @return {boolean}
 */

var isPalindrome = function(head) {

    let slow = head, fast = head, prev, temp

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    prev = slow
    slow = slow.next
    prev.next = null

    while (slow) {
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }

    fast = head
    slow = prev

    while (slow) {
        if (fast.val !== slow.val) {
            return false
        } else {
            fast = fast.next
            slow = slow.next
        }
    }

    return true
}

console.log(isPalindrome([1,2,2,1]))
console.log(isPalindrome([1,2]))