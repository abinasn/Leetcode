// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count=0, j=0;
    for(let i=0;i<s.length;i++){
        if((i-j) + 1 === 3){
            let sub = s.substring(j, i+1);
            if(new Set(sub.split("")).size===3){
                count++;
            }
            j++;
        }
    }
    return count;
};