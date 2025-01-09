/**
 * 
 * https://leetcode.com/problems/count-vowel-strings-in-ranges/description/
 * 
 * You are given a 0-indexed array of strings words and a 2D array of integers queries.

Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
Output: [2,3,0]
Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
The answer to the query [0,2] is 2 (strings "aba" and "ece").
to query [1,4] is 3 (strings "ece", "aa", "e").
to query [1,1] is 0.
We return [2,3,0].
Example 2:

Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
Output: [3,2,1]
Explanation: Every string satisfies the conditions, so we return [3,2,1].

 */

var vowelStrings = function(words, queries) {
    let vowels = ['a','e','i','o','u'];
    let indexes = [];
    for(let i=0;i<words.length;i++){
        let word = words[i];
        let l = word.length;
        if(vowels.includes(word[0]) && vowels.includes(word[l-1])){
            indexes.push(i);
        }
    }
    let result = []
    for(let i=0;i<queries.length;i++){
        let count = indexes.filter(ind=> ind >= queries[i][0] && ind <= queries[i][1]);
        result.push(count.length);   
    }
    console.log(result);
};

vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]])