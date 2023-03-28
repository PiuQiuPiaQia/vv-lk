/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let dummyNode = new ListNode(0, head);

  let count = 0;
  let p = head,
    q = head,
    pb = dummyNode,
    qn = head;
  while (q) {
    if (++count < k) {
      q = q.next;
    } else {
      qn = q.next;
      q.next = null;
      const newHead = reverseList(p);
      pb.next = newHead;
      pb = p;
      p = qn;
      q = qn;
      count = 0;
    }
  }
  if (count < k) {
    pb.next = p;
  }
  return dummyNode.next;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
// @lc code=end
