class Board {
    constructor(width) {
        this.width = width;
        this.board = [];
    }

    createBoard() {
          // reset game board if already created
        this.board = [];
          // create rows to push to board array;
        let rowCount = 0;
        for (let i=0; i<this.width; i++) {
            let row = [];
            for (let j=0; j<this.width; j++) {
                row.push([rowCount, j]);
            }
            this.board.push(row);
            rowCount++;
        }
    }

    displayBoard() {
        let boardStr = '';
        for (let row of this.board) {
            for (let square of row) {
                boardStr += `${[...square]}, `
            }
            console.log(boardStr)
            boardStr = ''; 
        }
    }

    possibleMoves(startPoint, piece) {
          // if startPoint is not on board, return
        if (startPoint[0] < 0 
            || startPoint[0] > 7 
            || startPoint[1] < 0 
            || startPoint[1] > 7) return;
        
          // movesArr will store possible moves to be returned by function
        let movesArr = [];

          // for each possible move by game piece, check if move
          // is valid and add it to movesArr;
        for (let move of piece.moves) {
            if (move[0] + startPoint[0] >= 0
                && move[0] + startPoint[0] <=7
                && move[1] + startPoint[1] >=0
                && move[1] + startPoint[1] <=7) {
                    movesArr.push([move[0] + startPoint[0], move[1] + startPoint[1]])
                }
        }
        console.log(movesArr)
        return movesArr;
    }
}

class Knight {
    constructor() {
        this.moves = [
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2],
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1]
        ]
    }
}

let chess = new Board(8);
chess.createBoard();

let knight = new Knight;










// TESTING 
// const testing = (() => {
//     let nested = [
//         [0, 0],
//         [0, 1],
//         [0, 2],
//         [0, 3], 
//         [0, 4]
//     ]

//     let test = [0, 0]

//     let compareArrays = (arr, test) => {
//         arr.forEach(element => {
//             if (element.length != test.length) return false;
//             for (let i=0; i<test.length; i++) {
//                 if (element[i] !== test[i]) return false;
//             }
            
//         });
//         return true;
//     }

//     console.log(compareArrays(nested, test))
// })()
