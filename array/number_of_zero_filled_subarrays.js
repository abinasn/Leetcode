/**
 * https://leetcode.com/problems/number-of-zero-filled-subarrays/description/
 * 
 * Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.
Example 1:
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

Example 2:
Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

Example 3:
Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.
 */

var zeroFilledSubarray = function (nums) {
    function getValue(n){
        return n*(n+1) / 2
    }
    let count = 0, start = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) start++;
        else{
            count += getValue(start);
            start = 0;
        }
    }
    if(start != 0) count +=getValue(start);
    return count;

    //Brute force
    // let count = 0, n = nums.length;
    // for (let i = 0; i < n; i++) {
    //     for (let j = i; j < n && nums[j] == 0; j++) {
    //         count++;
    //     }
    // }
    // return count;
};


console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]))