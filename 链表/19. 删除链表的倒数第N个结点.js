function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? 0 : next
}

/**
 * 要删除倒数第 n 个节点，就得获得倒数第 n + 1 个节点的引用。
 * 获取单链表的倒数第 k 个节点，就是想考察 双指针技巧 中快慢指针的运用，
 * 一般都会要求你只遍历一次链表，就算出倒数第 k 个节点。
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let dummy = new ListNode(-1)
	dummy.next = head
	let x = findLastNnode(dummy, n + 1)
	x.next = x.next.next
	return dummy.next
}

const findLastNnode = (head, n) => {
	const dummy = new ListNode(-1)
	dummy.next = head
	let slow = dummy,
		fast = dummy
	for (let i = 0; i < n; i++) {
		fast = fast.next
	}
	while (fast !== null) {
		fast = fast.next
		slow = slow.next
	}
	return slow
}
