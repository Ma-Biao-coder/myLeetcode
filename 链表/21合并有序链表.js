// Definition of ListNode
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

var mergeTwoList = function (list1, list2) {
	let dummy = new ListNode(-1)
	// 工作节点
	let p = dummy
	let p1 = list1,
		p2 = list2
	while (p1 && p2) {
		if (p1.val > p2.val) {
			p.next = p2
			// 移动相应的工作节点
			p2 = p2.next
			p = p.next
		} else {
			p.next = p1
			p1 = p1.next
			p = p.next
		}
	}
	// 把剩余的链表接上去
	if (p1) {
		p.next = p1
	}
	if (p2) {
		p.next = p2
	}
	return dummy.next
}
