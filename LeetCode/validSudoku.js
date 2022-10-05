var isValidSudoku = function(board) {

    let line = new Set(), column = new Set(), square = new Set()

    for (let i = 0; i < 9; i++) {
        line.clear(), column.clear(), square.clear()

        for (let j = 0; j < 9; j++) {
            
            let lineItem = board[i][j]
            let columnItem = board[j][i]
            let squareItem = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

            if (lineItem != ".") {
                if (line.has(lineItem)) return false
                line.add(lineItem)
            }

            if (columnItem != ".") {
                if (column.has(columnItem)) return false
                column.add(columnItem)
            }

            if (squareItem != ".") {
                if (square.has(squareItem)) return false
                square.add(squareItem)
            }

        }
    }

    return true
};

let boardTrue = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

let boardFalse = 
[["8","3","7",".","7","7",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,["6","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(boardTrue))
console.log(isValidSudoku(boardFalse))
