/**
 * https://leetcode.com/problems/valid-palindrome/description/
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 * 
 */


// var isPalindrome = function(s) {
//     // shortcut
//     let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
//     return newStr.split("").reverse().join("") === newStr ? true : false;
//     //long
//     s=s.toLowerCase();
//     let input = "";
//     let i=0,j = input.length-1;
//     while(i<=j){
//         if(input[i] !== input[j]){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// };

var rotateString = function(s, goal) {
    for(i=0;i<s.length;i++){
        let res = s.split('');
        let shift = res.shift();
        res = res.join('');
        res+=shift
        s = res;
        if(res === goal){
            return true;
        }
    }
    return false;
};

console.log(rotateString("abcde", "cdeab"))