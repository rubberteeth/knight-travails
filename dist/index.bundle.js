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
        let length = movesArr.length
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
            if (length == movesArr.length) return;
        }

        // while (moveOptions.length > 0) {
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


chess.findMoves([1, 1], knight)



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLndpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJvYXJkKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5ib2FyZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocm93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRNb3ZlcyhzdGFydFBvaW50LCBwaWVjZSwgbW92ZXNBcnI9W10pIHtcbiAgICAgICAgaWYgKHN0YXJ0UG9pbnRbMF0gPCAwIFxuICAgICAgICAgICAgfHwgc3RhcnRQb2ludFswXSA+IDcgXG4gICAgICAgICAgICB8fCBzdGFydFBvaW50WzFdIDwgMCBcbiAgICAgICAgICAgIHx8IHN0YXJ0UG9pbnRbMV0gPiA3KSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1vdmVPcHRpb25zID0gW11cbiAgICAgICAgbGV0IGxlbmd0aCA9IG1vdmVzQXJyLmxlbmd0aFxuICAgICAgICBmb3IgKGxldCBtb3ZlIG9mIHBpZWNlLm1vdmVzKSB7XG4gICAgICAgICAgICBsZXQgbW92ZU9wdGlvbiA9IFtdO1xuICAgICAgICAgICAgbW92ZU9wdGlvbi5wdXNoKG1vdmVbMF0gKyBzdGFydFBvaW50WzBdKTtcbiAgICAgICAgICAgIG1vdmVPcHRpb24ucHVzaChtb3ZlWzFdICsgc3RhcnRQb2ludCBbMV0pO1xuICAgICAgICAgICAgaWYgKG1vdmVPcHRpb25bMF0gPj0gMCBcbiAgICAgICAgICAgICAgICAmJiBtb3ZlT3B0aW9uWzBdIDw9IDcgXG4gICAgICAgICAgICAgICAgJiYgbW92ZU9wdGlvblsxXSA+PSAwIFxuICAgICAgICAgICAgICAgICYmIG1vdmVPcHRpb25bMV0gPD0gN1xuICAgICAgICAgICAgICAgICYmIG1vdmVzQXJyLmluZGV4T2YobW92ZU9wdGlvbikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXNBcnIucHVzaChtb3ZlT3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICBtb3ZlT3B0aW9ucy5wdXNoKG1vdmVPcHRpb24pXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmVPcHRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuZ3RoID09IG1vdmVzQXJyLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2hpbGUgKG1vdmVPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZmluZE1vdmVzKG1vdmVPcHRpb25zWzBdLCBwaWVjZSwgbW92ZXNBcnIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbW92ZXNBcnI7XG4gICAgfVxufVxuXG5jbGFzcyBLbmlnaHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vdmVzID0gW1xuICAgICAgICAgICAgWzEsIDJdLFxuICAgICAgICAgICAgWzEsIC0yXSxcbiAgICAgICAgICAgIFstMSwgMl0sXG4gICAgICAgICAgICBbLTEsIC0yXSxcbiAgICAgICAgICAgIFsyLCAxXSxcbiAgICAgICAgICAgIFsyLCAtMV0sXG4gICAgICAgICAgICBbLTIsIDFdLFxuICAgICAgICAgICAgWy0yLCAtMV1cbiAgICAgICAgXVxuICAgIH1cbn1cblxubGV0IGNoZXNzID0gbmV3IEJvYXJkKDgpO1xuY2hlc3MuY3JlYXRlQm9hcmQoKTtcblxubGV0IGtuaWdodCA9IG5ldyBLbmlnaHQ7XG5cblxuY2hlc3MuZmluZE1vdmVzKFsxLCAxXSwga25pZ2h0KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=