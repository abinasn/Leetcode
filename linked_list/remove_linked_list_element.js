/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * 
 * Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []
 */

var removeElements = function(head, val) {
    if(!head) return head;
    if(!head.next && head.val === val) return null;
    let curr = head; 
    while(curr && curr.next){
        if(curr.next.val == val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    if(head.val == val){
        head = head.next;
    }
    return head;
};