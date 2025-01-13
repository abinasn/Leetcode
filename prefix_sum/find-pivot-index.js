/**
 * https://leetcode.com/problems/find-pivot-index/description/
 * 
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */

var pivotIndex = function(nums) {
    // brute force

    // let left=0,right=0;
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1; j<nums.length;j++){
    //         right+=nums[j];
    //     }
    //     for(let k=i-1; k>=0;k--){
    //         left+=nums[k]
    //     }
    //     if(left==right) return i;
    //     else left =0, right=0
    // }
    // return -1;

    //prefix_sum O(n) & O(n)
    // const n=nums.length;
    // let leftSum=[nums[0]], rightSum = [];
    // for(let i=1;i<n;i++){
    //     leftSum[i] = leftSum[i-1] + nums[i];
    // }
    // rightSum[n-1] = nums[n-1];
    // for(let j=n-2;j>=0;j--){
    //     rightSum[j] = rightSum[j+1] + nums[j]
    // }
    // for(let i=0;i<n;i++){
    //     if(leftSum[i] === rightSum[i]) return i;
    // }
    // return -1;

    //prefix_sum O(n) & O(1)
    const n=nums.length;
    let left = 0, right=0;
    nums.forEach(num=>right+=num);
    for(let i=0;i<n;i++){
        const c = nums[i];
        right -=c;
        if(left === right) return i;
        left+=c;
    }
    return -1

};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))