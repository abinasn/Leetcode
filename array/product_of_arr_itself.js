/**
 * https://leetcode.com/problems/product-of-array-except-self/description/
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 */

var productExceptSelf = function(nums) {
    //brute force
    // This is a TLE approach
    // let answer = [];
    // for(let i=0;i<nums.length;i++){
    //     let p = 1;
    //     for(let j=0;j<nums.length;j++){
    //         if(i!=j) p *= nums[j];
    //     }
    //     answer[i] = p;
    // }  
    // return answer;
    
    //Left prefix and right prefix
    // let n = nums.length, answer=[]
    // let prefix = [], suffix = [];
    // prefix[0] = 1, suffix[n-1] = 1;
    // for(let i=1;i<n;i++){
    //     prefix[i] = prefix[i-1] * nums[i-1];
    // }
    // for(let i=n-2;i>=0;i--){
    //     suffix[i] = suffix[i+1] * nums[i+1]; 
    // }
    // for (let i = 0; i < n; i++) {
    //     answer[i] = prefix[i] * suffix[i];
    // }
    // return answer;

    //in single array. 1. left prefix, then update the same array with right. Do with answer array

    let n = nums.length, answer = [];
    answer[0] = 1;
    for(let i=1;i<n;i++){
        answer[i] = answer[i-1] * nums[i-1]; 
    }
    let p = 1;
    for(let i=n-1;i>=0;i--){
        answer[i] *= p;
        p *= nums[i]
    }
    return answer;
};

productExceptSelf([1,2,3,4]) //[24,12,8,6]