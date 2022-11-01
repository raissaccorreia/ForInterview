/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoListsRecursive = function(list1, list2) {

    if(!list1 || !list1) return (list1 ? list1 : list2)

    if(list1.val <= list2.val) {
        list1.next = mergeTwoListsRecursive(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoListsRecursive(list1, list2.next)
        return list2
    }
}

var mergeTwoListsIterative = function(list1, list2) {

    if(!list1 || !list2) return (list1 ? list1 : list2)

    let pointer = list1

    if(list1.val > list2.val) {
        pointer = list2
        list2 = list2.next
    } else {
        list1 = list1.next
    }

    let current = pointer

    while(list1 && list2) {

        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }

        current = current.next
    }

    if(!list1) current.next = list2
    else current.next = list1

    return pointer
}
