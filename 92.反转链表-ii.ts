/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // 非常重要
  // 整个链表的虚拟头节点，以防止left为1，pbefore找不到位置
  let dummyNode = new ListNode();
  dummyNode.next = head;
  head = dummyNode;

  let i = -1;
  // 左右两个边界node
  let p = head,
    q = head,
    pbefore = head;
  while (i < right - 1) {
    if (i < left - 1) {
      pbefore = p;
      p = p.next;
    }
    q = q.next;
    i++;
  }
  pbefore.next = null;
  let qnext = q.next;
  q.next = null;
  let newHead = reverseList(p);
  pbefore.next = newHead;
  p.next = qnext;
  return dummyNode.next;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
// @lc code=end
