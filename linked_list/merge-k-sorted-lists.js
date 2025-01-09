/**
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

idea:-
    1. Compare 2 sorted list the save the result.
    2. Again compare if any list is present with the result. 
 */

var mergeKLists = function(lists){
    const merge2SortedList = function(list1, list2){
        let list3 = new ListNode(0, null);
        let temp = list3;
        while(list1 && list2){
            if(list1.val < list2.val){
                temp.next = list1;
                list1 = list1.next;
            }else{
                temp.next = list2;
                list2 = list2.next;
            }
            temp = temp.next;
        }
        temp.next = list1 || list2;
        return list3.next;
    }
    let newList = merge2SortedList(lists[0], null);
    for(let i=1;i<lists.length;i++){
        newList = merge2SortedList(newList, lists[i]);
    }
    return newList;
}