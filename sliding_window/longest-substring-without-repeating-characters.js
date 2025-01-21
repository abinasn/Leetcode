/**
 * 
 * 
 */

var lengthOfLongestSubstring = function (s) {
    let start=0, end=1, l=0;
    for(let i=1;i<s.length;i++){
        const sub = s.slice(start, end);
        if(sub.includes(s[i])){
            let j = start;
            while(s[j] !== s[i]){
                j++;
            }
            start = j+1;
        }
        end=i+1
        l=Math.max(l, end-start);
    }
    return l;
};

console.log(lengthOfLongestSubstring("abcawcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))