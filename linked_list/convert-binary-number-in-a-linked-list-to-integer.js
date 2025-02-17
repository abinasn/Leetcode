/**
 * 
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/
 * 
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Input: head = [0]
Output: 0
 */

var getDecimalValue = function(head) {
    let curr = head, count = 0;
    while(curr){
        curr = curr.next;
        count++;
    }
    curr = head;
    let total = 0;
    while(curr){
        total += (curr.val * (Math.pow(2, --count)));
        curr = curr.next;
    }
    return total;
};