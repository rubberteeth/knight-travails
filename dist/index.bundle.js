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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGVBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgICAvLyByZXNldCBnYW1lIGJvYXJkIGlmIGFscmVhZHkgY3JlYXRlZFxuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgICAgLy8gY3JlYXRlIHJvd3MgdG8gcHVzaCB0byBib2FyZCBhcnJheTtcbiAgICAgICAgbGV0IHJvd0NvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRoaXMud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFtyb3dDb3VudCwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICByb3dDb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmRTdHIgPSAnJztcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuYm9hcmQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiByb3cpIHtcbiAgICAgICAgICAgICAgICBib2FyZFN0ciArPSBgJHtbLi4uc3F1YXJlXX0sIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvYXJkU3RyKVxuICAgICAgICAgICAgYm9hcmRTdHIgPSAnJzsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NzaWJsZU1vdmVzKHN0YXJ0UG9pbnQsIHBpZWNlKSB7XG4gICAgICAgICAgLy8gaWYgc3RhcnRQb2ludCBpcyBub3Qgb24gYm9hcmQsIHJldHVyblxuICAgICAgICBpZiAoc3RhcnRQb2ludFswXSA8IDAgXG4gICAgICAgICAgICB8fCBzdGFydFBvaW50WzBdID4gNyBcbiAgICAgICAgICAgIHx8IHN0YXJ0UG9pbnRbMV0gPCAwIFxuICAgICAgICAgICAgfHwgc3RhcnRQb2ludFsxXSA+IDcpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgLy8gbW92ZXNBcnIgd2lsbCBzdG9yZSBwb3NzaWJsZSBtb3ZlcyB0byBiZSByZXR1cm5lZCBieSBmdW5jdGlvblxuICAgICAgICBsZXQgbW92ZXNBcnIgPSBbXTtcblxuICAgICAgICAgIC8vIGZvciBlYWNoIHBvc3NpYmxlIG1vdmUgYnkgZ2FtZSBwaWVjZSwgY2hlY2sgaWYgbW92ZVxuICAgICAgICAgIC8vIGlzIHZhbGlkIGFuZCBhZGQgaXQgdG8gbW92ZXNBcnI7XG4gICAgICAgIGZvciAobGV0IG1vdmUgb2YgcGllY2UubW92ZXMpIHtcbiAgICAgICAgICAgIGlmIChtb3ZlWzBdICsgc3RhcnRQb2ludFswXSA+PSAwXG4gICAgICAgICAgICAgICAgJiYgbW92ZVswXSArIHN0YXJ0UG9pbnRbMF0gPD03XG4gICAgICAgICAgICAgICAgJiYgbW92ZVsxXSArIHN0YXJ0UG9pbnRbMV0gPj0wXG4gICAgICAgICAgICAgICAgJiYgbW92ZVsxXSArIHN0YXJ0UG9pbnRbMV0gPD03KSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVzQXJyLnB1c2goW21vdmVbMF0gKyBzdGFydFBvaW50WzBdLCBtb3ZlWzFdICsgc3RhcnRQb2ludFsxXV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG1vdmVzQXJyKVxuICAgICAgICByZXR1cm4gbW92ZXNBcnI7XG4gICAgfVxufVxuXG5jbGFzcyBLbmlnaHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vdmVzID0gW1xuICAgICAgICAgICAgWzEsIDJdLFxuICAgICAgICAgICAgWzEsIC0yXSxcbiAgICAgICAgICAgIFstMSwgMl0sXG4gICAgICAgICAgICBbLTEsIC0yXSxcbiAgICAgICAgICAgIFsyLCAxXSxcbiAgICAgICAgICAgIFsyLCAtMV0sXG4gICAgICAgICAgICBbLTIsIDFdLFxuICAgICAgICAgICAgWy0yLCAtMV1cbiAgICAgICAgXVxuICAgIH1cbn1cblxubGV0IGNoZXNzID0gbmV3IEJvYXJkKDgpO1xuY2hlc3MuY3JlYXRlQm9hcmQoKTtcblxubGV0IGtuaWdodCA9IG5ldyBLbmlnaHQ7XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRFU1RJTkcgXG4vLyBjb25zdCB0ZXN0aW5nID0gKCgpID0+IHtcbi8vICAgICBsZXQgbmVzdGVkID0gW1xuLy8gICAgICAgICBbMCwgMF0sXG4vLyAgICAgICAgIFswLCAxXSxcbi8vICAgICAgICAgWzAsIDJdLFxuLy8gICAgICAgICBbMCwgM10sIFxuLy8gICAgICAgICBbMCwgNF1cbi8vICAgICBdXG5cbi8vICAgICBsZXQgdGVzdCA9IFswLCAwXVxuXG4vLyAgICAgbGV0IGNvbXBhcmVBcnJheXMgPSAoYXJyLCB0ZXN0KSA9PiB7XG4vLyAgICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoICE9IHRlc3QubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGVzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGlmIChlbGVtZW50W2ldICE9PSB0ZXN0W2ldKSByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cblxuLy8gICAgIGNvbnNvbGUubG9nKGNvbXBhcmVBcnJheXMobmVzdGVkLCB0ZXN0KSlcbi8vIH0pKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==