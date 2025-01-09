/**
 * 
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 * 
 * 
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]
 */

var deleteDuplicates = function(head) {
    // if(!head) return head;
    // let node = new ListNode(head.val, null);
    // let tail = node;
    // head = head.next;
    // while(head){
    //     if(tail.val !== head.val){
    //         tail.next = new ListNode(head.val, null);
    //         tail = tail.next;
    //     }
    //     head = head.next;
    // }
    // return node;

    if(!head) return head;

    let curr = head;
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return head;
};