// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function(nums) {
    let left = 0, right = nums.length -1;
    while(left < right){
        const mid = left + Math.floor((right - left) / 2);
        if(nums[mid] < nums[mid+1]){
            left = mid+1;
        }else{
            right=mid;
        }
    }
    return left;
};

console.log(findPeakElement([1,2,3,1]))
// console.log(findPeakElement([1,2,1,3,5,6,4]))
