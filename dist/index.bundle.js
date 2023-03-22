(self["webpackChunkknight_travails"] = self["webpackChunkknight_travails"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgICAvLyByZXNldCBnYW1lIGJvYXJkIGlmIGFscmVhZHkgY3JlYXRlZFxuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgICAgLy8gY3JlYXRlIHJvd3MgdG8gcHVzaCB0byBib2FyZCBhcnJheTtcbiAgICAgICAgbGV0IHJvd0NvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRoaXMud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFtyb3dDb3VudCwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICByb3dDb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmRTdHIgPSAnJztcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuYm9hcmQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiByb3cpIHtcbiAgICAgICAgICAgICAgICBib2FyZFN0ciArPSBgJHtbLi4uc3F1YXJlXX0sIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvYXJkU3RyKVxuICAgICAgICAgICAgYm9hcmRTdHIgPSAnJzsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NzaWJsZU1vdmVzKHN0YXJ0UG9zaXRpb24sIHBpZWNlPWtuaWdodCkge1xuICAgICAgICAgIC8vIGlmIHN0YXJ0UG9zaXRpb24gaXMgbm90IG9uIGJvYXJkLCByZXR1cm5cbiAgICAgICAgaWYgKHN0YXJ0UG9zaXRpb25bMF0gPCAwIFxuICAgICAgICAgICAgfHwgc3RhcnRQb3NpdGlvblswXSA+IDcgXG4gICAgICAgICAgICB8fCBzdGFydFBvc2l0aW9uWzFdIDwgMCBcbiAgICAgICAgICAgIHx8IHN0YXJ0UG9zaXRpb25bMV0gPiA3KSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgIC8vIG1vdmVzQXJyIHdpbGwgc3RvcmUgcG9zc2libGUgbW92ZXMgdG8gYmUgcmV0dXJuZWQgYnkgZnVuY3Rpb25cbiAgICAgICAgbGV0IG1vdmVzQXJyID0gW107XG5cbiAgICAgICAgICAvLyBmb3IgZWFjaCBwb3NzaWJsZSBtb3ZlIGJ5IGdhbWUgcGllY2UsIGNoZWNrIGlmIG1vdmVcbiAgICAgICAgICAvLyBpcyB2YWxpZCBhbmQgYWRkIGl0IHRvIG1vdmVzQXJyO1xuICAgICAgICBmb3IgKGxldCBtb3ZlIG9mIHBpZWNlLm1vdmVzKSB7XG4gICAgICAgICAgICBpZiAobW92ZVswXSArIHN0YXJ0UG9zaXRpb25bMF0gPj0gMFxuICAgICAgICAgICAgICAgICYmIG1vdmVbMF0gKyBzdGFydFBvc2l0aW9uWzBdIDw9N1xuICAgICAgICAgICAgICAgICYmIG1vdmVbMV0gKyBzdGFydFBvc2l0aW9uWzFdID49MFxuICAgICAgICAgICAgICAgICYmIG1vdmVbMV0gKyBzdGFydFBvc2l0aW9uWzFdIDw9Nykge1xuICAgICAgICAgICAgICAgICAgICBtb3Zlc0Fyci5wdXNoKFttb3ZlWzBdICsgc3RhcnRQb3NpdGlvblswXSwgbW92ZVsxXSArIHN0YXJ0UG9zaXRpb25bMV1dKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZXNBcnI7XG4gICAgfVxuXG5cblxufVxuXG5jbGFzcyBnYW1lUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKG1vdmVzKSB7XG4gICAgICAgIHRoaXMubW92ZXMgPSBtb3ZlcztcbiAgICB9XG59XG5cbmxldCBjaGVzcyA9IG5ldyBCb2FyZCg4KTtcbmNoZXNzLmNyZWF0ZUJvYXJkKCk7XG5cbmxldCBrbmlnaHQgPSBuZXcgZ2FtZVBpZWNlKFtcbiAgICBbMSwgMl0sXG4gICAgWzEsIC0yXSxcbiAgICBbLTEsIDJdLFxuICAgIFstMSwgLTJdLFxuICAgIFsyLCAxXSxcbiAgICBbMiwgLTFdLFxuICAgIFstMiwgMV0sXG4gICAgWy0yLCAtMV1cbl0pO1xuXG4gIC8vIHF1aWNrIGNvbXBhcmlzb24gZnVuY3Rpb25cbmxldCBjb21wYXJlQXJyYXlzID0gKGFyciwgdGVzdCkgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcnIpID09IEpTT04uc3RyaW5naWZ5KHRlc3QpO1xufVxuXG5jb25zdCBrbmlnaHRNb3ZlcyA9IChzdGFydCwgZ29hbCwgbW92ZXNBcnI9W10sIGNvdW50PTAsIGNhcHR1cmVkTGFzdD1mYWxzZSkgPT4ge1xuICAgICAgLy8gdXNlIG1vdmVzQXJyIHRvIHN0b3JlIGFsbCBtb3ZlcyBhbG9uZyBxdWlja2VzdCByb3V0ZSB0byBnb2FsXG5cbiAgICAgIC8vIGFkZCAnZ29hbCcgcG9zaXRpb24gdG8gYXJyYXkgYXMgZnVuY3Rpb24gbW92ZXMgYmFja3dhcmRzIFxuICAgICAgLy8gZnJvbSBnb2FsIGJ1dCBuZXZlciBjYXB0dXJlc1xuICAgIGlmICghY2FwdHVyZWRMYXN0KSB7XG4gICAgICAgIG1vdmVzQXJyLnB1c2goZ29hbCk7XG4gICAgICAgIGNhcHR1cmVkTGFzdCA9IHRydWU7XG4gICAgfSBcbiAgICAgIC8vIGlmIHN0YXJ0IHBvc2l0aW9uID09IGdvYWwsIHByaW50IHN0YXRlbWVudCBhbmQgcmV0dXJuO1xuICAgIGlmIChjb21wYXJlQXJyYXlzKHN0YXJ0LCBnb2FsKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgWW91IG1hZGUgaXQgaW4gJHtjb3VudH0gbW92ZXMhIEhlcmUncyB5b3VyIHBhdGg6YCk7XG4gICAgICAgIGZvciAobGV0IG1vdmUgb2YgbW92ZXNBcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHttb3ZlfV1gKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7bW92ZXNBcnIsIGNvdW50fTtcbiAgICB9XG4gICAgICAvLyBpZiBub3QgaW5jcmVtZW50IGNvdW50O1xuICAgIGNvdW50Kys7XG4gICAgICAgLy8gZm91bmQgdmFyaWFibGUgdXNlZCB0byBleGl0IHdoaWxlIGxvb3A7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAvLyBzdG9yZSBtb3ZlcyBpbiBhIHF1ZXVlIHRvIGZpbmQgZmFzdGVzdCBwb3NzaWJsZSByb3V0ZSxcbiAgICAgIC8vIGlmIGFuIGF2YWlsYWJsZSBtb3ZlID09IGdvYWwgKGZpcnN0IHBhc3MpIHRoZW4gaXQgd2lsbCBiZSBjYXVnaHQgYW5kIHJldHVybmVkXG4gICAgICAvLyBpZiBub3Qgc3RvcmUgcG9zc2libGUgbW92ZXMgZnJvbSBlYWNoIG1vdmUgKHNlY29uZCBwYXNzKSBpbiBxdWV1ZVxuICAgICAgLy8gcmVwZWF0IHVudGlsIGdvYWwgaXMgZm91bmRcbiAgICBsZXQgcG9zaXRpb25RdWV1ZSA9IFtdO1xuICAgICAgLy8gYWRkIHN0YXJ0IHBvc2l0aW9uIHRvIHF1ZXVlXG4gICAgcG9zaXRpb25RdWV1ZS5wdXNoKHN0YXJ0KTtcbiAgICAgIC8vIEZJRk8gcXVldWUgdW50aWwgY29ycmVjdCBtb3ZlIGlzIGZvdW5kXG4gICAgd2hpbGUoZm91bmQgPT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgbW92ZSBvZiBjaGVzcy5wb3NzaWJsZU1vdmVzKHBvc2l0aW9uUXVldWVbMF0pKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZUFycmF5cyhtb3ZlLCBnb2FsKSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIG1vdmUgaXMgZm91bmQgYWRkIG1vdmUgdG8gZnJvbnQgb2YgbW92ZXNBcnJcbiAgICAgICAgICAgICAgICBtb3Zlc0Fyci51bnNoaWZ0KHBvc2l0aW9uUXVldWVbMF0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGFkZCBtb3ZlIHRvIHF1ZXVlXG4gICAgICAgICAgICAgICAgcG9zaXRpb25RdWV1ZS5wdXNoKG1vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uUXVldWUuc2hpZnQoKTtcbiAgICB9XG4gICAgICAvLyBjcmVhdGUgbmV3IGdvYWwgKGN1cnJlbnQgZmlyc3QgcG9zaXRpb24gaW4gbW92ZXNBcnIpIHRvIFxuICAgICAgLy8gYmVjb21lIHBvc2l0aW9uIHRoYXQgcmVhY2hlZCBjdXJyZW50IGdvYWwgaW4gb25lIG1vdmU7XG4gICAgICAvLyByZWN1cnNlIHVudGlsIHN0YXJ0IHBvc2l0aW9uIGlzIGVxdWFsIHRvIGdvYWwgcG9zaXRpb247XG4gICAgcmV0dXJuIGtuaWdodE1vdmVzKHN0YXJ0LCBtb3Zlc0FyclswXSwgbW92ZXNBcnIsIGNvdW50LCBjYXB0dXJlZExhc3QpICBcbn1cblxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxua25pZ2h0TW92ZXMoWzAsIDBdLCBbNywgN10pIC8vID0+XG5cbi8vIFlvdSBtYWRlIGl0IGluIDYgbW92ZXMhIEhlcmUncyB5b3VyIHBhdGg6XG5cbi8vIFswLDBdXG4vLyBbMSwyXVxuLy8gWzIsNF1cbi8vIFszLDZdXG4vLyBbNCw0XVxuLy8gWzUsNl1cbi8vIFs3LDddXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==