/**
 * https://leetcode.com/problems/majority-element/description/
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

var majorityElement = function (nums) {

    // Using map
    // const n = nums.length;
    // const cap = parseInt(n / 2);
    // let map = {};
    // for (let i = 0; i < n; i++) {
    //     if (nums[i] in map) {
    //         map[nums[i]]++;
    //     } else {
    //         map[nums[i]] = 1;
    //     }
    //     if (map[nums[i]] > cap) {
    //         return nums[i];
    //     }
    // }

    // Sorting
    // nums.sort((a,b)=>a-b);
    // return nums[parseInt(nums.length / 2)];

    //using sorting
    // nums.sort((a, b) => a - b);
    // const n = nums.length;
    // const cap = parseInt(n / 2);
    // let c = 1, ele = nums[0];
    // for (let i = 1; i < n; i++) {
    //     if (ele !== nums[i]) {
    //         ele = nums[i];
    //         c = 1
    //     } else {
    //         c++;
    //     }
    //     if (c > cap) return ele;
    // }
    // return ele;

    // Boyer-Moore Voting Algorithm

    const n = nums.length;
    let candidate = nums[0], count = 1;
    for(let i=1;i<n;i++){
        if(count == 0) {
            candidate = nums[i];
        }
        count += (nums[i] == candidate) ? 1 : -1;
    }
    return candidate;
};

console.log(majorityElement([2,2,1,1,1,2,1]))