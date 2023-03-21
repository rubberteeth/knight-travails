class Board {
    constructor(width) {
        this.width = width;
        this.board = [];
    }

    createBoard() {
        this.board = [];
        for (let i=0; i<this.width; i++) {
            let row = [];
            for (let j=0; j<this.width; j++) {
                row.push(j);
            }
            this.board.push(row);
        }
    }

    displayBoard() {
        for (let row of this.board) {
            console.log(row);
        }
    }

    findMoves(startPoint, piece, movesArr=[]) {
        if (startPoint[0] < 0 
            || startPoint[0] > 7 
            || startPoint[1] < 0 
            || startPoint[1] > 7) return;

        let moveOptions = []
        
        for (let move of piece.moves) {
            let moveOption = [];
            moveOption.push(move[0] + startPoint[0]);
            moveOption.push(move[1] + startPoint [1]);
            if (moveOption[0] >= 0 
                && moveOption[0] <= 7 
                && moveOption[1] >= 0 
                && moveOption[1] <= 7
                && movesArr.indexOf(moveOption) == -1) {
                    movesArr.push(moveOption)
                    moveOptions.push(moveOption)
                    console.log(moveOption)
            }
        }

        // while (moveOptions.length > 0) {
        //     console.log(movesArr)
        //     this.findMoves(moveOptions[0], piece, movesArr);
        // }
        
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


// chess.findMoves([1, 1], knight)

let nested = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3], 
    [0, 4]
]

let test = [0, 0]

let compareArrays = (arr, test) => {
    arr.forEach(element => {
        if (element.length != test.length) return false;
        for (let i=0; i<test.length; i++) {
            if (element[i] !== test[i]) return false;
        }
        
    });
    return true;
}

console.log(compareArrays(nested, test))