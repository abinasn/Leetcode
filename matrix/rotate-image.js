// https://leetcode.com/problems/rotate-image/


var rotate = function(matrix) {
    let n = matrix.length-1;
    for(let i=0;i<=n;i++){
        for(let j=i+1;i<=n;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
            // [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))


