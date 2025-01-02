/**
 * https://leetcode.com/problems/rotate-array/description/
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */


var rotate = function(nums, k){
    //Brute force. The below approach won't work for large arrays.
    // const n = nums.length;
    // k = k % nums.length;
    // for(let i=0;i<k;i++){
    //     let j=n-1;
    //     const ele = nums[j];
    //     while(j > 0){
    //         nums[j] = nums[j-1];
    //         nums[j-1] = ele;
    //         j--;
    //     }
    // }
    // return nums;


    /**
     * Test for first example
     * 1. Reverse 0 to n-1-k items [4,3,2,1,5,6,7]
     * 2. Reverse n-k to n-1 items [4,3,2,1,7,6,5]
     * 3. Reverse 0 to n-1 items [5,6,7,1,2,3,4]
     */
    // const n = nums.length;
    // k = k % n;

    

    // const r = function(start, end, arr){
    //     while(start <= end){
    //         [arr[start], arr[end]] = [arr[end], arr[start]];
    //         start++;
    //         end--;
    //     }
    // }

    // r(0, n-1-k, nums);
    // r(n-k, n-1, nums);
    // r(0, n-1, nums);

    // return nums;

    /**
     * Modulus approach
     * 1.Create a new arry fill with 0
     * 2. Then update the new arr
     */

    const n = nums.length;
    k = k % n;
    const arr = new Array(n).fill(0);
    for(let i=0;i<n;i++){
        arr[(i+k) % n] = nums[i];
    }
    for(let i=0;i<n;i++){
        nums[i] = arr[i];
    }
    return nums;
}


console.log(rotate([1,2,3,4,5,6,7], 3))
