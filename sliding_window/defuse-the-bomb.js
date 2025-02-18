/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {

    //brute-force
    // let answers =[];
    // for(let i=0;i<code.length;i++){
    //     if(k>0){
    //         let j=i+1 >= code.length ? (i+1 - code.length) : i+1;
    //         let sum = 0, count=k;
    //         while(j!==i && count>0){
    //             sum+=code[j];
    //             count--;
    //             j= j+1 >= code.length ? (j+1 - code.length) : j+1;
    //         }
    //         answers[i] = sum;
    //     }else if(k<0){
    //         let j=i-1 < 0 ? (code.length - (i+1)) : i-1;
    //         let sum = 0, count=-k;
    //         while(j!==i && count>0){
    //             sum+=code[j];
    //             count--;
    //             j= j-1 < 0 ? (code.length - (j+1)) : j-1;
    //         }
    //         answers[i] = sum;
    //     }else{
    //         answers[i] = 0;
    //     }
    // }
    // return answers;

    //sliding-window
    const n = code.length;
    let answers = new Array(n).fill(0);
    if (k == 0) return answers;

    let start = k > 0 ? 1 : n + k;
    let end = k > 0 ? k : n - 1;

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += code[i % n]
    }

    for (let i = 0; i < n; i++){
        answers[i] = sum;
        sum-=code[(start + i) % n];
        sum+=code[(end+i+1) %n];
    }
    return answers;
};

console.log(decrypt([5, 7, 1, 4], 3))
console.log(decrypt([2, 4, 9, 3], -2))