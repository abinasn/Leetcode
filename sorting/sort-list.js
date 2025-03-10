/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var merge = function(left, right){
  let temp = new ListNode(0, null);
  let dummy=temp;
  while(left && right){
    if(left.val < right.val){
      temp.next = left;
      left=left.next;
    }else{
      temp.next = right;
      right = right.next;  
    }
    temp=temp.next;
  }

  temp.next = left || right;
  return dummy.next;
}

var findMid = function(head){
  if(!head || !head.next){
    return head;
  }
  let slow = head, fast = head.next;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

var sortList = function (head) {
  if(!head || !head.next){
    return;
  }
  const mid = findMid(head);

  let leftHead = sortList(head);
  let rightHead = sortList(mid.next);
  mid.next=null;

  return merge(leftHead, rightHead);
};