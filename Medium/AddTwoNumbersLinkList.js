/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let ptr= new ListNode()
    let carry = 0
    const headNode= ptr

    while (l1 || l2 || carry) {
        let val1 = 0
        let val2 = 0
        if (l1) {
            val1 = l1.val
            l1 = l1.next
        }
        if (l2) {
            val2 = l2.val
            l2 = l2.next
        }
        const sum = val1 + val2 + carry
        carry =Math.floor(sum / 10) 
        const result = sum % 10
        const currentPtr= new ListNode(result)
        ptr.next= currentPtr
        ptr= currentPtr
    }
    return headNode.next
};