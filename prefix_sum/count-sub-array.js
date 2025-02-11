// https://leetcode.com/problems/continuous-subarray-sum/description/


var checkSubarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, -1); // rem and index;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let rem = sum%k;
        if(map.has(rem)){
            if(i-map.get(rem) > 1){
                return true;
            }
        }else{
            map.set(rem, i);
        }
    }  
    return false;
};