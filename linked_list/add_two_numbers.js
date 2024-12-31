/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

 */
var addTwoNumbers = function(l1,l2){
    let carry=0, l3Front=null, l3Tail=null;
    while(l1 || l2){
        let sum =0;
        if(l1){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2=l2.next;
        }
        if(carry) sum+= carry;
        let r = sum % 10;
        carry = parseInt(sum / 10);
        const newNode = new ListNode(r, null);
        if(!l3Front){
            l3Front = newNode;
            l3Tail = newNode;
        }else{
            l3Tail.next = newNode;
            l3Tail = newNode;
        }
    }
    if(carry){
        const newNode = new ListNode(carry, null);
        l3Tail.next = newNode;
        l3Tail=newNode;
    }
    return l3Front;
}