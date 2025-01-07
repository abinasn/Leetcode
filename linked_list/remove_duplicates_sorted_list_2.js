/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 * 
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 * 
Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]


Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]
 */

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let curr = head, prev = null;
    while(curr && curr.next){
        
    }  
};