/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/** Restrições:
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 */
 var rotate = function(matrix) {

    let len = matrix.length

    for (let i = 0; i < len/2; i++) {
        for (let j = i; j < len - i - 1; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[len-1-j][i]
            matrix[len-1-j][i] = matrix[len-1-i][len-1-j]
            matrix[len-1-i][len-1-j] = matrix[j][len-1-i]
            matrix[j][len-1-i] = temp
        }
    }

    return matrix
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
