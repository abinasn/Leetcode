// https://leetcode.com/problems/minimum-window-substring/

var minWindow = function (s, t) {
    let map = {}, l = 0, r = 0, minLength = Infinity, start = -1,
        count = 0, tl = t.length, sl = s.length;

    if (sl < tl) return "";
    for (let c of t) {
        map[c]= (map[c] ?? 0) + 1
    }
    while (r < sl) {
        if(map[s[r]] > 0) count++;
        map[s[r]] = (map[s[r]] ?? 0) - 1;
        while(count === tl){
            if(r-l+1 < minLength){
                minLength = r-l+1;
                start = l;
            }
            map[s[l]] = (map[s[l]] ?? 0) + 1;
            if(map[s[l]] > 0){
                count--;
            }
            l++;
        }
        r++;
    }
    return start === -1 ? "" : s.substring(start, start+minLength);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
// console.log(minWindow("a", "a"));
// console.log(minWindow("a", "aa"));