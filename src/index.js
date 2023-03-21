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

    possibleMoves(startPosition, piece=knight) {
          // if startPosition is not on board, return
        if (startPosition[0] < 0 
            || startPosition[0] > 7 
            || startPosition[1] < 0 
            || startPosition[1] > 7) return;
        
          // movesArr will store possible moves to be returned by function
        let movesArr = [];

          // for each possible move by game piece, check if move
          // is valid and add it to movesArr;
        for (let move of piece.moves) {
            if (move[0] + startPosition[0] >= 0
                && move[0] + startPosition[0] <=7
                && move[1] + startPosition[1] >=0
                && move[1] + startPosition[1] <=7) {
                    movesArr.push([move[0] + startPosition[0], move[1] + startPosition[1]])
                }
        }
        return movesArr;
    }



}

class gamePiece {
    constructor(moves) {
        this.moves = moves;
    }
}

let chess = new Board(8);
chess.createBoard();

let knight = new gamePiece([
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1]
]);

let compareArrays = (arr, test) => {
    return JSON.stringify(arr) == JSON.stringify(test);
}

const buildTree = (position, goal) => {
    
}

const knightMoves = (start, goal, movesArr=[], count=0) => {
      // if start position is the goal, return;
    if (compareArrays(start, goal)) return movesArr;
      // if not increment count;
    count++;
       // found variable used to exit while loop;
    let found = false;
      // store moves
    let positionQueue = [];
    positionQueue.push(start);

    while(found == false) {
        for (let move of chess.possibleMoves(positionQueue[0])) {
            if (compareArrays(move, goal)) {
                found = true;
                movesArr.push(positionQueue[0])
            } else {
                positionQueue.push(move);
            }
        }
        positionQueue.shift();
    }
        


    return movesArr[0];  
}
    

console.log(knightMoves([0,0], [2, 2]))
console.log(knightMoves([0,0], [4, 3]))
console.log(knightMoves([0,0], [2, 4]))
console.log(knightMoves([0,0], [1, 2]))



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

