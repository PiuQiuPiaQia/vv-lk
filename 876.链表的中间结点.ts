/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }
  if (head.next == null) {
    return head;
  }
  if (head.next.next == null) {
    return head.next;
  }
  let p = head,
    q = head;
  while (q != null && q.next != null) {
    p = p.next;
    q = q.next.next;
  }
  return p;
}
// @lc code=end
