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

let compareArrays = (arr, test) => {
    return JSON.stringify(arr) == JSON.stringify(test);
}

const buildTree = (position, goal) => {
    
}

const knightMoves = (start, goal, movesArr=[], count=0) => {
      // if start position is the goal, return;
    if (compareArrays(start, goal)) return {movesArr, count};
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
    // knightMoves(movesArr[movesArr.length - 1], goal, movesArr, count)  
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixlQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgICAgLy8gcmVzZXQgZ2FtZSBib2FyZCBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICAgIC8vIGNyZWF0ZSByb3dzIHRvIHB1c2ggdG8gYm9hcmQgYXJyYXk7XG4gICAgICAgIGxldCByb3dDb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLndpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChbcm93Q291bnQsIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgcm93Q291bnQrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCb2FyZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkU3RyID0gJyc7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmJvYXJkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygcm93KSB7XG4gICAgICAgICAgICAgICAgYm9hcmRTdHIgKz0gYCR7Wy4uLnNxdWFyZV19LCBgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2FyZFN0cilcbiAgICAgICAgICAgIGJvYXJkU3RyID0gJyc7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zc2libGVNb3ZlcyhzdGFydFBvc2l0aW9uLCBwaWVjZT1rbmlnaHQpIHtcbiAgICAgICAgICAvLyBpZiBzdGFydFBvc2l0aW9uIGlzIG5vdCBvbiBib2FyZCwgcmV0dXJuXG4gICAgICAgIGlmIChzdGFydFBvc2l0aW9uWzBdIDwgMCBcbiAgICAgICAgICAgIHx8IHN0YXJ0UG9zaXRpb25bMF0gPiA3IFxuICAgICAgICAgICAgfHwgc3RhcnRQb3NpdGlvblsxXSA8IDAgXG4gICAgICAgICAgICB8fCBzdGFydFBvc2l0aW9uWzFdID4gNykgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgICAvLyBtb3Zlc0FyciB3aWxsIHN0b3JlIHBvc3NpYmxlIG1vdmVzIHRvIGJlIHJldHVybmVkIGJ5IGZ1bmN0aW9uXG4gICAgICAgIGxldCBtb3Zlc0FyciA9IFtdO1xuXG4gICAgICAgICAgLy8gZm9yIGVhY2ggcG9zc2libGUgbW92ZSBieSBnYW1lIHBpZWNlLCBjaGVjayBpZiBtb3ZlXG4gICAgICAgICAgLy8gaXMgdmFsaWQgYW5kIGFkZCBpdCB0byBtb3Zlc0FycjtcbiAgICAgICAgZm9yIChsZXQgbW92ZSBvZiBwaWVjZS5tb3Zlcykge1xuICAgICAgICAgICAgaWYgKG1vdmVbMF0gKyBzdGFydFBvc2l0aW9uWzBdID49IDBcbiAgICAgICAgICAgICAgICAmJiBtb3ZlWzBdICsgc3RhcnRQb3NpdGlvblswXSA8PTdcbiAgICAgICAgICAgICAgICAmJiBtb3ZlWzFdICsgc3RhcnRQb3NpdGlvblsxXSA+PTBcbiAgICAgICAgICAgICAgICAmJiBtb3ZlWzFdICsgc3RhcnRQb3NpdGlvblsxXSA8PTcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXNBcnIucHVzaChbbW92ZVswXSArIHN0YXJ0UG9zaXRpb25bMF0sIG1vdmVbMV0gKyBzdGFydFBvc2l0aW9uWzFdXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmVzQXJyO1xuICAgIH1cblxuXG5cbn1cblxuY2xhc3MgZ2FtZVBpZWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihtb3Zlcykge1xuICAgICAgICB0aGlzLm1vdmVzID0gbW92ZXM7XG4gICAgfVxufVxuXG5sZXQgY2hlc3MgPSBuZXcgQm9hcmQoOCk7XG5jaGVzcy5jcmVhdGVCb2FyZCgpO1xuXG5sZXQga25pZ2h0ID0gbmV3IGdhbWVQaWVjZShbXG4gICAgWzEsIDJdLFxuICAgIFsxLCAtMl0sXG4gICAgWy0xLCAyXSxcbiAgICBbLTEsIC0yXSxcbiAgICBbMiwgMV0sXG4gICAgWzIsIC0xXSxcbiAgICBbLTIsIDFdLFxuICAgIFstMiwgLTFdXG5dKTtcblxubGV0IGNvbXBhcmVBcnJheXMgPSAoYXJyLCB0ZXN0KSA9PiB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFycikgPT0gSlNPTi5zdHJpbmdpZnkodGVzdCk7XG59XG5cbmNvbnN0IGJ1aWxkVHJlZSA9IChwb3NpdGlvbiwgZ29hbCkgPT4ge1xuICAgIFxufVxuXG5jb25zdCBrbmlnaHRNb3ZlcyA9IChzdGFydCwgZ29hbCwgbW92ZXNBcnI9W10sIGNvdW50PTApID0+IHtcbiAgICAgIC8vIGlmIHN0YXJ0IHBvc2l0aW9uIGlzIHRoZSBnb2FsLCByZXR1cm47XG4gICAgaWYgKGNvbXBhcmVBcnJheXMoc3RhcnQsIGdvYWwpKSByZXR1cm4ge21vdmVzQXJyLCBjb3VudH07XG4gICAgICAvLyBpZiBub3QgaW5jcmVtZW50IGNvdW50O1xuICAgIGNvdW50Kys7XG4gICAgICAgLy8gZm91bmQgdmFyaWFibGUgdXNlZCB0byBleGl0IHdoaWxlIGxvb3A7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAvLyBzdG9yZSBtb3Zlc1xuICAgIGxldCBwb3NpdGlvblF1ZXVlID0gW107XG4gICAgcG9zaXRpb25RdWV1ZS5wdXNoKHN0YXJ0KTtcblxuICAgIHdoaWxlKGZvdW5kID09IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IG1vdmUgb2YgY2hlc3MucG9zc2libGVNb3Zlcyhwb3NpdGlvblF1ZXVlWzBdKSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVBcnJheXMobW92ZSwgZ29hbCkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW92ZXNBcnIucHVzaChwb3NpdGlvblF1ZXVlWzBdKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblF1ZXVlLnB1c2gobW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb25RdWV1ZS5zaGlmdCgpO1xuICAgIH1cbiAgICAvLyBrbmlnaHRNb3Zlcyhtb3Zlc0Fyclttb3Zlc0Fyci5sZW5ndGggLSAxXSwgZ29hbCwgbW92ZXNBcnIsIGNvdW50KSAgXG4gICAgcmV0dXJuIG1vdmVzQXJyWzBdO1xufVxuICAgIFxuXG5jb25zb2xlLmxvZyhrbmlnaHRNb3ZlcyhbMCwwXSwgWzIsIDJdKSlcbmNvbnNvbGUubG9nKGtuaWdodE1vdmVzKFswLDBdLCBbNCwgM10pKVxuY29uc29sZS5sb2coa25pZ2h0TW92ZXMoWzAsMF0sIFsyLCA0XSkpXG5jb25zb2xlLmxvZyhrbmlnaHRNb3ZlcyhbMCwwXSwgWzEsIDJdKSlcblxuXG5cbi8vIFRFU1RJTkcgXG4vLyBjb25zdCB0ZXN0aW5nID0gKCgpID0+IHtcbi8vICAgICBsZXQgbmVzdGVkID0gW1xuLy8gICAgICAgICBbMCwgMF0sXG4vLyAgICAgICAgIFswLCAxXSxcbi8vICAgICAgICAgWzAsIDJdLFxuLy8gICAgICAgICBbMCwgM10sIFxuLy8gICAgICAgICBbMCwgNF1cbi8vICAgICBdXG5cbi8vICAgICBsZXQgdGVzdCA9IFswLCAwXVxuXG4vLyAgICAgbGV0IGNvbXBhcmVBcnJheXMgPSAoYXJyLCB0ZXN0KSA9PiB7XG4vLyAgICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoICE9IHRlc3QubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGVzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGlmIChlbGVtZW50W2ldICE9PSB0ZXN0W2ldKSByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cblxuLy8gICAgIGNvbnNvbGUubG9nKGNvbXBhcmVBcnJheXMobmVzdGVkLCB0ZXN0KSlcbi8vIH0pKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9