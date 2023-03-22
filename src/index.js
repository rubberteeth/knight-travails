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

  // quick comparison function
let compareArrays = (arr, test) => {
    return JSON.stringify(arr) == JSON.stringify(test);
}

const knightMoves = (start, goal, movesArr=[], count=0, capturedLast=false) => {
      // use movesArr to store all moves along quickest route to goal

      // add 'goal' position to array as function moves backwards 
      // from goal but never captures
    if (!capturedLast) {
        movesArr.push(goal);
        capturedLast = true;
    } 
      // if start position == goal, print statement and return;
    if (compareArrays(start, goal)) {
        console.log(`You made it in ${count} moves! Here's your path:`);
        for (let move of movesArr) {
            console.log(`[${move}]`)
        }
        return {movesArr, count};
    }
      // if not increment count;
    count++;
       // found variable used to exit while loop;
    let found = false;
      // store moves in a queue to find fastest possible route,
      // if an available move == goal (first pass) then it will be caught and returned
      // if not store possible moves from each move (second pass) in queue
      // repeat until goal is found
    let positionQueue = [];
      // add start position to queue
    positionQueue.push(start);
      // FIFO queue until correct move is found
    while(found == false) {
        for (let move of chess.possibleMoves(positionQueue[0])) {
            if (compareArrays(move, goal)) {
                found = true;
                  // if move is found add move to front of movesArr
                movesArr.unshift(positionQueue[0])
            } else {
                  // otherwise add move to queue
                positionQueue.push(move);
            }
        }
        positionQueue.shift();
    }
      // create new goal (current first position in movesArr) to 
      // become position that reached current goal in one move;
      // recurse until start position is equal to goal position;
    return knightMoves(start, movesArr[0], movesArr, count, capturedLast)  
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

knightMoves([0, 0], [7, 7]) // =>

// You made it in 6 moves! Here's your path:

// [0,0]
// [1,2]
// [2,4]
// [3,6]
// [4,4]
// [5,6]
// [7,7]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

