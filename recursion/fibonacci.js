/**
 * https://leetcode.com/problems/fibonacci-number/description/
 * 
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 */

let map = {};
var fib = function(n){
    // if(n in map) return map[n];
    // if(n==0) return 0;
    // if(n==1) return 1;
    // map[n] = fib(n-1) + fib(n-2);
    // return map[n];
    if(n==1) return n;
    let f = 0, s = 1, sum=1;
    for(let i=0;i<n;i++){
        sum = f+s;
        f=sum-f;
        s=sum;
    }
    return sum;
    // let arr=[];
    // arr[0]=1, arr[1] = 1;
    // for(let i=2;i<=n;i++){
    //     arr.push(arr[i-1] + arr[i-2])
    // }
    // return arr[n];
}

// console.log(fib(51));

