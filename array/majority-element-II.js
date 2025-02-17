// // https://leetcode.com/problems/majority-element-ii/description/
// var majorityElement = function(nums) {
//     let candidate1 = null, candidate2 = null;
//     let count1 = 0, count2 =0;
//     for(let n of nums){
//         if(count1 === 0){
//             candidate1 = n;
//             count1=1;
//         }else if(count2 === 0){
//             candidate2 = n;
//             count2=1;
//         }else if(candidate1 === n){
//             count1++;
//         }else if(candidate2 === n){
//             count2++;
//         }else {
//             count1--;
//             count2--;
//         }
//     }
//     count1=0,count2=0;
//     const bar = Math.floor(nums.length / 3);
//     console.log(candidate1, candidate2)
//     for(let n of nums){
//         if(candidate1 == n) count1++;
//         if(candidate2 == n) count2++;
//     }
//     let set = new Set();
//     if(count1 > bar) set.add(candidate1);
//     if(count2 > bar) set.add(candidate2);

//     return [...set]; 
// };

// console.log(majorityElement([2,1,1,3,1,4,5,6]));

var sumOfGoodNumbers = function(nums, k) {
    let sum = 0, n = nums.length;
    for(let i=0;i<n;i++){
        let left = right = false;
        if((!nums[i-k]) || (nums[i] > nums[i-k])) left = true;
        if((!nums[i+k]) || (nums[i] > nums[i+k])) right = true;
        if(left && right){
            sum+=nums[i];
        }
    }
    return sum;
};

console.log(sumOfGoodNumbers([1,3,2,1,5,4], 2));
console.log(sumOfGoodNumbers([2,1], 1));