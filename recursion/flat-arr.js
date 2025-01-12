/**
 * 
 * Falt an array without using arr.flat
 * 
 * input: [1,2,[3,4,[5,6]]]
 * output: [1,2,3,4,5,6]
 */

const flattenArray = function(arr){
    let result = [];

    arr.forEach(item=>{
        if(Array.isArray(item)){
            result = result.concat(flattenArray(item));
        }else{
            result.push(item);
        }
    });

    return result;
}   

console.log(flattenArray([1,2,[3,[1,10],[5,6]]]));