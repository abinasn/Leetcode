/**
 * https://leetcode.com/problems/climbing-stairs/description/
 * 
 * 
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 */

let memo = {};
var climbStairs = function(num){
    //same as fibonacci
    // if(num in memo) return memo[num];
    // if(num==1 || num==2) return num;
    // memo[num] = climbStairs(num-1) + climbStairs(num-2);
    // return memo[num];
    if(num==1 || num==2) return num;
    let f=0, s=1, sum=0,i=0;
    while(i<num){
        sum=f+s;
        f=sum-f;
        s=sum;
        i++
    }
    return sum;
}