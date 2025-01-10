/**
 * https://leetcode.com/problems/power-of-two/description/
 * 
 * Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:
Input: n = 1
Output: true
Explanation: 2^0 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 2^4 = 16

Example 3:
Input: n = 3
Output: false
 */

var isPowerOfTwo = function(n) {
    // while(n>0){
    //     if(n==1) return true;
    //     n = n/2;
    // }
    // return false;

    // using recursion
    // if(n==1) return true;
    // if(n<=0) return false;
    // return (n%2==0 && isPowerOfTwo(n/2))

    //using bit manipulation
    return (n > 0 && (n & n-1) == 0) ? true : false;
    
};

var myPow = function(x, n) {
    console.log(n);
    if(n==0) return 1;
    return n < 0 ? 1 / x * myPow(x, n+1) : x * myPow(x, n-1)
};

console.log(myPow(2, -200000000))

