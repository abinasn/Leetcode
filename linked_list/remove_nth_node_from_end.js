/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
 */

// by using count
var removeNthFromEnd = function(head, n){
    let current = head, count=0;
    while(current){
        current = current.next;
        count++;
    }
    current=head;
    let pos = count - n, c=0;
    if(pos == 0){
        if(!current.next) return null;
        return current.next;
    }
    let prev=head;
    while(c!=pos){
        prev = current;
        current = current.next;
        c++;
    }
    if(!current.next) prev.next = null;
    else if(current.next) prev.next = current.next;
    return head;

}

//by using a loop till n;
var removeNthFromEnd = function(head, n){
    let temp = new ListNode(0, head); 
    let temp1 = temp;

    let i=0;
    while(i<n){
        head = head.next;
        i++;
    }

    while(head){
        head = head.next;
        temp1 = temp1.next;
    }
    temp1.next=temp1.next.next;
    return temp.next;

}