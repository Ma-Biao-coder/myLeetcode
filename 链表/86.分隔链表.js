/**
 * 创建两个链表，一个用于记录大于等于x的，一个用于记录小于x的
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	// list >= x
	let dummy1 = new ListNode(-1)
	// list < x
	let dummy2 = new ListNode(-1)
	let p = head,
		p1 = dummy1,
		p2 = dummy2
	//
	while (p) {
		if (p.val >= x) {
			p1.next = new ListNode(p.val)
			p1 = p1.next
		} else {
			p2.next = new ListNode(p.val)
			p2 = p2.next
		}
		p = p.next
	}
	p2.next = dummy1.next
	return dummy2.next
}
