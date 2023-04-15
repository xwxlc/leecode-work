// https://leetcode.cn/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  var resList = new ListNode();
  var tempList = resList;
  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      tempList.next = list1;
      list1 = list1.next;
    } else {
      tempList.next = list2;
      list2 = list2.next;
    }
    tempList = tempList.next;
  }
  tempList.next = list1 == null ? list2 : list1;
  return resList.next;
};
