//https://leetcode.com/problems/spiral-matrix/description/


var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let sr=0, sc=0, er=m-1, ec = n-1, result = []
    while(sr<=er && sc<=ec){
        for(let i=sc;i<=ec;i++){
            result.push(matrix[sr][i])
        }

        for(let i=sr+1;i<=er;i++){
            result.push(matrix[i][ec]);
        }

        for(let i=ec-1;i>=sc;i--){
            if(sr === er){
                break;
            }
            result.push(matrix[er][i])
        }

        for(let i=er-1;i>=sr+1;i--){
            if(sc === ec){
                break;
            }
            result.push(matrix[i][sc]);
        }

        sr++;
        sc++;
        er--;
        ec--;
    }
    return result;
};