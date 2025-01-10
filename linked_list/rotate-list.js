/**
 * 
 * https://leetcode.com/problems/rotate-list/description/
 * 
 * 
 * Given the head of a linked list, rotate the list to the right by k places.
 * 
 * Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]
 */

var rotateRight = function(head, k) {
    if(!head) return head;
    let count = 1;
    let curr = head;
    while(curr && curr.next){
        curr = curr.next;
        count++;
    }
    k = k % count;
    if(!k) return head;
    let c=0;
    let tail = head;
    while(c!==count-k-1){
        tail = tail.next;
        c++;
    }
    let newHead = tail.next;
    tail.next=null;
    curr.next = head;
    return newHead;
};