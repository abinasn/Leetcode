// https://leetcode.com/problems/find-all-anagrams-in-a-string/

var findAnagrams = function(s, p) {
    const result = [];
    if(s.length < p.length) return result;

    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);

    for(let char of p){
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    for(let i=0;i<p.length; i++){
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let matches = 0;
    for(let i=0;i<26;i++){
        if(pCount[i] === sCount[i]) matches++;
    }
    for(let i=0;i<s.length - p.length;i++){
        if(matches === 26) result.push(i);
        const lIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const rIndex = s[i + p.length].charCodeAt(0) - 'a'.charCodeAt(0);
        sCount[rIndex]++;
        if(sCount[rIndex] === pCount[rIndex]){
            matches++;
        }else if(sCount[rIndex] === pCount[rIndex] + 1){
            matches--;
        }
        sCount[lIndex]--;
        if (sCount[lIndex] === pCount[lIndex]) {
            matches++;
        } else if (sCount[lIndex] === pCount[lIndex] - 1) {
            matches--;
        }
    }
    if (matches === 26) result.push(s.length - p.length);
    return result;
};

// console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("bpaa", "aa"));


