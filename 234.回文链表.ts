/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  if (!head.next) {
    return true;
  }
  let arr = [];
  let p = head,
    q = head;
  while (q && q.next) {
    arr.push(p.val);
    p = p.next;
    q = q.next.next;
  }
  if (q && !q.next) {
    p = p.next;
  }
  while (p) {
    if (p.val != arr.pop()) {
      return false;
    }
    p = p.next;
  }
  return true;
}
// @lc code=end
