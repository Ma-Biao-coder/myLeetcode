/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	let p = head
	let res = []
	while (p) {
		res.push(p.val)
		p = p.next
	}
	let dummy = new ListNode(-1),
		p2 = dummy
	let n = res.length

	for (let i = 0; i < left - 1; i++) {
		p2.next = new ListNode(res[i])
		p2 = p2.next
	}

	// 链表反转
	for (let i = right - 1; i >= left - 1; i--) {
		p2.next = new ListNode(res[i])
		p2 = p2.next
	}

	for (let i = right; i < n; i++) {
		p2.next = new ListNode(res[i])
		p2 = p2.next
	}

	return dummy.next
}
