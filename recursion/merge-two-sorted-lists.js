/**
 * 
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

idea:-
1. Check values of each list and compare them.
2. Point it into the newly created list.
 */

var mergeTwoLists = function(list1, list2){

    //using recursion
    if(!list1 || !list2) return list1 || list2;
    if(list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }else{
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
    
    // let list3Head = new ListNode(0, null);
    // let list3Tail = list3Head;
    // while(list1 && list2){
    //     if(list1.val < list2.val){
    //         list3Tail.next = list1;
    //         list1 = list1.next;
    //     }else{
    //         list3Tail.next = list2;
    //         list2 = list2.next;
    //     }
    //     list3Tail = list3Tail.next;
    // }
    // list3Tail.next = list1 || list2;
    // return list3Head.next;
}