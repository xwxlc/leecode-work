// https://leetcode.cn/problems/add-two-numbers/

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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 链表l1 l2是逆序存储的 所以我们只要同为相加就可以了
 * 当长度不一时 缺少的位置直接0代替
 *
 */
var addTwoNumbers = function (l1, l2) {
  let resList = new ListNode();
  let tempList = resList;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    tempList.next = new ListNode(sum % 10);
    tempList = tempList.next;
    carry = (sum / 10) | 0;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return resList.next;
};
