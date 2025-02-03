/**
 * 
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * 
 * 
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 

Constraints:

1 <= text.length <= 104
text consists of lower case English letters only.
 */


var maxNumberOfBalloons = function (text) {
    let b = 0, a = 0, l = 0, o = 0, n = 0;
    for (let c of text) {
        switch (c) {
            case 'b':
                b++;
                break;
            case 'a':
                a++;
                break;
            case 'l':
                l++
                break;
            case 'o':
                o++;
                break;
            case 'n':
                n++;
                break;
        }
    }
    return Math.min(b, a, Math.floor(l / 2), Math.floor(o / 2), n);


    // let map = {
    //     b: 0,
    //     a: 0,
    //     l: 0,
    //     o: 0,
    //     n: 0
    // };
    // let count=0;
    // for(let i=0; i<text.length; i++){
    //     if(map.hasOwnProperty(text[i])){
    //         map[text[i]]++;
    //     }
    //     if(map.b >= 1 && map.a >= 1 && map.l >= 2 && map.o >= 2 && map.n >= 1){
    //         count++;
    //         map = {
    //             ...map,
    //             b: map["b"]-1,
    //             a: map["a"]-1,
    //             l: map["l"]-2,
    //             o: map["o"]-2,
    //             n: map["n"]-1
    //         }
    //     }
    // }
    // return count;
    // return Math.min(map['b'], map['a'], Math.floor(map['l'] / 2), Math.floor(map['o'] / 2), map['n']);
};

// console.log(maxNumberOfBalloons("balllllllllllloooooooooon"));