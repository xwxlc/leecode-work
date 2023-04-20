// https://leetcode.cn/problems/next-greater-node-in-linked-list/
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// 递归
var nextLargerNodes = function (head) {
  let answer = [];
  const fn = (links) => {
    if (!links) {
      return false;
    }
    let other = links;
    while (other.next && links.val >= other.next.val) {
      other = other.next;
    }
    answer.push(other.next?.val > links.val ? other.next?.val : 0);
    fn(links.next);
  };
  fn(head);
  return answer;
};

/**
 * 单调栈
 * 思路 用一个栈储存已经遍历过的，且没有找到下一个更大节点的值的节点，如果有的，推出栈，那么栈里面的元素肯定是递减的
 * 遍历链表，从栈顶开始，如果栈顶的元素值比当前链表节点的值小，脱出栈顶，将栈顶所在位置的结果值设置为当前节点的值，否则，将该节点值以及该位置推入链表
 */

var nextLargerNodes2 = function (head) {
  let answer = [];
  let stack = [];
  let i = 0;
  while (head) {
    answer[i] = 0;
    const { val, next } = head;
    while (stack.length && stack[stack.length - 1][1] < val) {
      answer[stack[stack.length - 1][0]] = val;
      stack.pop();
    }
    // 记录当前值和下表
    stack.push([i, val]);
    i++;
    head = next;
  }
  return answer;
};
