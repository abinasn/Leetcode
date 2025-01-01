/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
 */

var reverseList = function(head) {
    if(!head) return head;
    let prev = null;
    while(head){
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;  
};