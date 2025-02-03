/**
 * 
 * 
 */

var lengthOfLongestSubstring = function (s) {
    // let start=0, end=1, l=0;
    // for(let i=1;i<s.length;i++){
    //     const sub = s.slice(start, end);
    //     if(sub.includes(s[i])){
    //         let j = start;
    //         while(s[j] !== s[i]){
    //             j++;
    //         }
    //         start = j+1;
    //     }
    //     end=i+1
    //     l=Math.max(l, end-start);
    // }
    // return l;

    let i=0, j=0, max =0, set = new Set();
    while(j<s.length){
        if(!set.has(s[j])){
            set.add(s[j]);
            max = Math.max(max, j-i+1);
            j++;
        }else{
            set.delete(s[i]);
            i++;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))