/**
 * https://leetcode.com/problems/next-greater-element-i/description/
 * 
 * 
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 * 
 * 
 */


var nextGreaterElement = function(nums1, nums2) {

    //brute force
    // let output = [];
    // for(let i=0;i<nums1.length;i++){
    //     let index = nums2.findIndex(k=>k==nums1[i]);
    //     let v = -1;
    //     let j=index+1;
    //     while(j < nums2.length){
    //         if(nums2[index] < nums2[j]){
    //             v = nums2[j];
    //             break;
    //         }
    //         j++;
    //     }
    //     output.push(v);
    // }
    // return output;

    //map and monotonic stack
    let map = {}, stack = [nums2[0]];
    for(let i=1;i<nums2.length;i++){
        while(stack.length && stack[stack.length - 1] < nums2[i]){
            map[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]);
    }
    while(stack.length !== 0){
        map[stack.pop()] = -1;
    }
    let output = []
    for(let i=0;i<nums1.length;i++){
        output.push(map[nums1[i]]);
    }
    return output;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));

console.log(nextGreaterElement([137,59,92,122,52,131,79,236,94,171,141,86,169,199,248,120,196,168,77,71,5,198,215,230,176,87,189,206,115,76,13,216,197,26,183,54,250,27,109,140,147,25,96,105,30,207,241,8,217,40,0,35,221,191,83,132,9,144,12,91,175,65,170,149,174,82,102,167,62,70,44,143,10,153,160,142,188,81,146,212,15,162,103,163,123,48,245,116,192,14,211,126,63,180,88,155,224,148,134,158,119,165,130,112,166,93,125,1,11,208,150,100,106,194,124,2,184,75,113,104,18,210,202,111,84,223,173,238,41,33,154,47,244,232,249,60,164,227,253,56,157,99,179,6,203,110,127,152,252,55,185,73,67,219,22,156,118,234,37,193,90,187,181,23,220,72,255,58,204,7,107,239,42,139,159,95,45,242,145,172,209,121,24,21,218,246,49,46,243,178,64,161,117,20,214,17,114,69,182,85,229,32,129,29,226,136,39,36,233,43,240,254,57,251,78,51,195,98,205,108,61,66,16,213,19,68,237,190,3,200,133,80,177,97,74,138,38,235,135,186,89,201,4,101,151,31,228,231,34,225,28,222,128,53,50,247], [137,59,92,122,52,131,79,236,94,171,141,86,169,199,248,120,196,168,77,71,5,198,215,230,176,87,189,206,115,76,13,216,197,26,183,54,250,27,109,140,147,25,96,105,30,207,241,8,217,40,0,35,221,191,83,132,9,144,12,91,175,65,170,149,174,82,102,167,62,70,44,143,10,153,160,142,188,81,146,212,15,162,103,163,123,48,245,116,192,14,211,126,63,180,88,155,224,148,134,158,119,165,130,112,166,93,125,1,11,208,150,100,106,194,124,2,184,75,113,104,18,210,202,111,84,223,173,238,41,33,154,47,244,232,249,60,164,227,253,56,157,99,179,6,203,110,127,152,252,55,185,73,67,219,22,156,118,234,37,193,90,187,181,23,220,72,255,58,204,7,107,239,42,139,159,95,45,242,145,172,209,121,24,21,218,246,49,46,243,178,64,161,117,20,214,17,114,69,182,85,229,32,129,29,226,136,39,36,233,43,240,254,57,251,78,51,195,98,205,108,61,66,16,213,19,68,237,190,3,200,133,80,177,97,74,138,38,235,135,186,89,201,4,101,151,31,228,231,34,225,28,222,128,53,50,247]))