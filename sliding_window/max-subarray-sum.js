var maxSubarraySum = function(arr, n){
    let sum=0, max=0;
    for(let i=0;i<n;i++){
        sum+=arr[i];
    }
    max= sum;
    for(let i=n;i<arr.length;i++){
        sum = (sum - arr[i-n]) + arr[i];
        max = Math.max(max,sum)
    }
    return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))
console.log(maxSubarraySum([1,2,5,2,8,1,5],4))


