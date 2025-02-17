// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/

// console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))

var findSubstring = function(s, words) {
    let l = words[0].length;
    let map = {};
    for(let w of words){
        map[w] = (map[w] || 0) + 1;
    }
    let joined = words.join("");
    if(joined.length > s.length) return [];
    let j=0,result=[], newMap = {...map};

    for(let i=0;i<=s.length;i++){
        if((i-j) === joined.length){
            let sub = s.substring(j, i);
            let k=0, count = words.length;
            while(k<sub.length){
                let x=sub.substring(k, k+l)
                if(newMap[x] > 0){
                    count--;
                    newMap[x]--;
                }
                k+=l;
            }   
            if(count === 0){
                result.push(j)
            }       
            j++;
            newMap = {...map}
        }
    }
    return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]))
console.log(findSubstring("barfoofoobarthefoobarman", ["foo", "bar", "the"]))
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]))
console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]))