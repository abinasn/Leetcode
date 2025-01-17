/**
 * https://leetcode.com/problems/first-missing-positive/description/
 * 
 * Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 */

var firstMissingPositive = function(nums) {
    // let largest = nums[0];
    // for(let i=1;i<nums.length;i++) {
    //     if(largest < nums[i]){
    //         largest = nums[i];
    //     }
    // }
    // for(let i=1;i<largest;i++){
    //     if(!nums.includes(i)) return i;
    // }
    // return largest+1

    let smallest=1;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i] === smallest) smallest++;
    }
    return smallest;
}

console.log(firstMissingPositive([3,4,-1,1]))