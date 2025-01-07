/**
 * https://leetcode.com/problems/move-zeroes/description/
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

 
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 */

var moveZeroes = function(nums) {
    //extra space
    // let arr = [], j=0;
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i] !=0){
    //         arr[j] = nums[i];
    //         j++;
    //     }
    // }
    // while(j<nums.length){
    //     arr[j] = 0;
    //     j++;
    // }
    // for(let i=0;i<arr.length;i++)
    //     nums[i] = arr[i];
    // return nums;

    //Two pointer;
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[j] = nums[i];
            j++;
        }
    }

    while(j<nums.length){
        nums[j] = 0;
        j++;
    }
    return nums;

    //In place 0 approach #copied
    // let j=0;
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i] !== 0){
    //         [nums[j], nums[i]] = [nums[i], nums[j]];
    //         j++;
    //     }
    // }
    // return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
