/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var hasCycle = function (head) {
	// if (!head) return false
	const set = new Set()
	let p = head
	while (p) {
		if (set.has(p)) {
			return true
		} else {
			set.add(p)
			p = p.next
		}
	}
	return false
}
