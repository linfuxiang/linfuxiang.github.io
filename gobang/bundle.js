/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

window.game = new _game.GAME('#canvas', '#status', '.result');
game.init(20, 20, 1000, 1000);
document.querySelector('#result button').addEventListener('click', function () {
	game.init(20, 20, 1000, 1000);
	document.querySelector('#result').style.display = 'none';
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * el 画布元素
 * ctx 画布context
 * statusEl 状态元素
 * resultEl 游戏结束提示元素
 * player 当前玩家，true白棋，false黑棋
 * firstInit 是否初次渲染
 * waiting 是否游戏已结束，等待初始化
 * process 游戏过程
 * lastImg 上一个画布（用于清除s当前棋子的提示）
 * rowNum 行格子数量
 * colNum 列格子数量
 * row 行长度
 * col 列长度
 * chessGrid 格子大小
 * chessmanSize 棋子大小
 */
var GAME = function () {
    function GAME(canvasSelector, statusSelector, resultSelector) {
        _classCallCheck(this, GAME);

        this.el = document.querySelector(canvasSelector);
        this.ctx = this.el.getContext('2d');
        this.statusEl = document.querySelector(statusSelector);
        this.resultEl = document.querySelector(resultSelector);
        this.player = false;
        this.firstInit = true; // 是否第一次初始化
        this.waiting = false;
        this.process = [];
        this.lastImg = null;
    }
    /**
     * 初始化棋盘
     * @param  {Number} rowNum 行格子数量
     * @param  {Number} colNum 列格子数量
     * @param  {Number} row 行长度
     * @param  {Number} col 列长度
     */


    _createClass(GAME, [{
        key: 'init',
        value: function init(rowNum, colNum, row, col) {
            if (row / rowNum != col / colNum) {
                alert('格子非正方形，不能初始化.');
                return false;
            }
            this.rowNum = rowNum;
            this.colNum = colNum;
            this.row = row;
            this.col = col;
            // 设置格子大小
            this.chessGrid = row / rowNum;
            // 设置棋子大小
            this.chessmanSize = row / rowNum / 2 - 2;

            // 用二维数组设置棋局
            this.status = [];
            for (var _i = 0; _i < rowNum - 1; _i++) {
                this.status[_i] = [];
                for (var j = 0; j < colNum - 1; j++) {
                    this.status[_i][j] = null;
                }
            }

            // 画棋盘
            // 画背景
            this.ctx.fillStyle = "#FFF";
            this.ctx.fillRect(0, 0, row, col);
            // 画线条
            this.ctx.strokeStyle = "#000";
            this.ctx.beginPath();
            var i = 1;
            while (i < rowNum) {
                this.ctx.moveTo(0, i * row / rowNum);
                this.ctx.lineTo(row, i * row / rowNum);
                i++;
            }
            i = 1;
            while (i < colNum) {
                this.ctx.moveTo(i * col / colNum, 0);
                this.ctx.lineTo(i * col / colNum, col);
                i++;
            }
            this.ctx.stroke();
            if (this.firstInit) {
                this.firstInit = false;
                this.bindEvent();
            }
            this.statusEl.innerText = '';
            this.waiting = false;
            this.player = false;
            this.process = [];
        }
        /**
         * 创建棋子
         * @param  {Boolean} type 黑棋type=false,白棋type=true
         * @param  {Array} station [横坐标, 纵坐标]
         */

    }, {
        key: 'createChessman',
        value: function createChessman(type, station) {
            this.ctx.fillStyle = type ? '#fff' : '#000';
            this.ctx.beginPath();
            this.ctx.arc(station[0], station[1], this.chessmanSize, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.strokeStyle = '#000';
            this.ctx.beginPath();
            this.ctx.arc(station[0], station[1], this.chessmanSize, 0, 2 * Math.PI);
            this.ctx.stroke();
            this.ctx.closePath();
        }

        /**
         * 创建最后一次下的棋子是哪个的提示
         * @param  {Array} station [横坐标, 纵坐标]
         * @param  {Boolean} isClear 是否为清除操作
         */

    }, {
        key: 'createCurrentTip',
        value: function createCurrentTip(station, isClear) {
            var length = this.chessmanSize / 2;
            this.ctx.strokeStyle = isClear ? '#fff' : '#f75000';
            this.ctx.lineJoin = 'miter';
            this.ctx.beginPath();
            // 左上角
            this.ctx.moveTo(station[0] - this.chessmanSize + length, station[1] - this.chessmanSize);
            this.ctx.lineTo(station[0] - this.chessmanSize, station[1] - this.chessmanSize);
            this.ctx.lineTo(station[0] - this.chessmanSize, station[1] - this.chessmanSize + length);
            // 左下角
            this.ctx.moveTo(station[0] - this.chessmanSize, station[1] + this.chessmanSize - length);
            this.ctx.lineTo(station[0] - this.chessmanSize, station[1] + this.chessmanSize);
            this.ctx.lineTo(station[0] - this.chessmanSize + length, station[1] + this.chessmanSize);
            // 右下角
            this.ctx.moveTo(station[0] + this.chessmanSize - length, station[1] + this.chessmanSize);
            this.ctx.lineTo(station[0] + this.chessmanSize, station[1] + this.chessmanSize);
            this.ctx.lineTo(station[0] + this.chessmanSize, station[1] + this.chessmanSize - length);
            // 右上角
            this.ctx.moveTo(station[0] + this.chessmanSize, station[1] - this.chessmanSize + length);
            this.ctx.lineTo(station[0] + this.chessmanSize, station[1] - this.chessmanSize);
            this.ctx.lineTo(station[0] + this.chessmanSize - length, station[1] - this.chessmanSize);
            this.ctx.stroke();
        }

        /**
         * 判断是否有同样颜色的棋子
         * @param  {Boolean} type 黑棋type=false,白棋type=true
         * @param  {Number} x X坐标
         * @param  {Number} y Y坐标
         * @return {Boolean}   true白棋，false黑棋，null空，undefined超出边界
         */

    }, {
        key: 'checkIfChess',
        value: function checkIfChess(x, y) {
            // 由于有可能越出边界，所以使用trc-catch方便判断
            try {
                var status = this.status[x][y];
                return status;
            } catch (e) {
                return undefined;
            }
        }

        /**
         * 判断游戏是否结束
         * @param  {Number} x X坐标
         * @param  {Number} y Y坐标
         * @param  {Number} way 1横，2竖，3左上-右下，4左下-右上
         * @param  {Boolean} direc 方向：1前，2后
         * @param  {Number} count 计数
         * @return {Boolean} [description]
         */

    }, {
        key: 'judgeGameOver',
        value: function judgeGameOver(x, y, way) {
            var count = 1;
            var flagL = false,
                flagR = false;
            switch (way) {
                case 1:
                    for (var i = 1; i <= 4; i++) {
                        var res = this.checkIfChess(x - i, y);
                        if (res === this.player) {
                            count++;
                        } else if (res === null) {
                            flagL = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    for (var _i2 = 1; _i2 <= 4; _i2++) {
                        var _res = this.checkIfChess(x + _i2, y);
                        if (_res === this.player) {
                            count++;
                        } else if (_res === null) {
                            flagR = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    break;
                case 2:
                    for (var _i3 = 1; _i3 <= 4; _i3++) {
                        var _res2 = this.checkIfChess(x, y - _i3);
                        if (_res2 === this.player) {
                            count++;
                        } else if (_res2 === null) {
                            flagL = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    for (var _i4 = 1; _i4 <= 4; _i4++) {
                        var _res3 = this.checkIfChess(x, y + _i4);
                        if (_res3 === this.player) {
                            count++;
                        } else if (_res3 === null) {
                            flagR = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    break;
                case 3:
                    for (var _i5 = 1; _i5 <= 4; _i5++) {
                        var _res4 = this.checkIfChess(x - _i5, y - _i5);
                        if (_res4 === this.player) {
                            count++;
                        } else if (_res4 === null) {
                            flagL = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    for (var _i6 = 1; _i6 <= 4; _i6++) {
                        var _res5 = this.checkIfChess(x + _i6, y + _i6);
                        if (_res5 === this.player) {
                            count++;
                        } else if (_res5 === null) {
                            flagR = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    break;
                case 4:
                    for (var _i7 = 1; _i7 <= 4; _i7++) {
                        var _res6 = this.checkIfChess(x + _i7, y - _i7);
                        if (_res6 === this.player) {
                            count++;
                        } else if (_res6 === null) {
                            flagL = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    for (var _i8 = 1; _i8 <= 4; _i8++) {
                        var _res7 = this.checkIfChess(x - _i8, y + _i8);
                        if (_res7 === this.player) {
                            count++;
                        } else if (_res7 === null) {
                            flagR = true;
                            break;
                        } else {
                            break;
                        }
                    }
                    break;
            }
            //  || (flagL && flagR && count == 4)
            if (count == 5) {
                return true;
            }
            /*// 判断横
            if (this.checkIfChess(x - 1, y) || this.checkIfChess(x + 1, y)) {
                console.log('横')
            }
            // 判断竖
            if (this.checkIfChess(x, y - 1) || this.checkIfChess(x, y + 1)) {
                console.log('竖')
            }
            // 判断斜（左上-右下）
            if (this.checkIfChess(x - 1, y - 1) || this.checkIfChess(x + 1, y + 1)) {
                console.log('左上-右下')
            }
            // 判断斜（左下-右上）
            if (this.checkIfChess(x - 1, y + 1) || this.checkIfChess(x + 1, y - 1)) {
                console.log('左下-右上')
            }*/
        }

        /**
         * 绑定事件（下棋用）
         * @return {[type]} [description]
         */

    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var _this = this;

            this.el.addEventListener('click', function (e) {
                if (_this.waiting) {
                    return false;
                }
                var x = void 0,
                    y = void 0;
                if (e.layerX || e.layerX == 0) {
                    x = e.layerX;
                    y = e.layerY;
                } else if (e.offsetX || e.offsetX == 0) {
                    // Opera  
                    x = e.offsetX;
                    y = e.offsetY;
                }
                var xCount = Math.floor((x - _this.chessGrid / 2) / _this.chessGrid) + 1,
                    yCount = Math.floor((y - _this.chessGrid / 2) / _this.chessGrid) + 1;
                // 满足下棋条件之后，下棋并判断是否游戏结束
                if (xCount && yCount && xCount < _this.rowNum && yCount < _this.colNum && _this.status[xCount - 1][yCount - 1] === null) {
                    if (_this.process.length) {
                        _this.ctx.putImageData(_this.lastImg, 0, 0);
                    }
                    _this.createChessman(_this.player, [_this.chessGrid * xCount, _this.chessGrid * yCount]);
                    _this.lastImg = _this.ctx.getImageData(0, 0, _this.el.width, _this.el.height);
                    _this.createCurrentTip([_this.chessGrid * xCount, _this.chessGrid * yCount]);
                    _this.status[xCount - 1][yCount - 1] = _this.player;
                    _this.statusEl.innerHTML += (_this.player ? '白棋' : '黑棋') + '走：(' + xCount + ',' + yCount + ')<br/>';
                    _this.process.push([xCount, yCount]);
                    // 判断游戏是否结束
                    if (_this.judgeGameOver(xCount - 1, yCount - 1, 1) || _this.judgeGameOver(xCount - 1, yCount - 1, 2) || _this.judgeGameOver(xCount - 1, yCount - 1, 3) || _this.judgeGameOver(xCount - 1, yCount - 1, 4)) {
                        _this.statusEl.innerHTML += (_this.player ? '白棋' : '黑棋') + '胜！';
                        document.querySelector('#result').style.display = 'block';
                        _this.resultEl.innerText = (_this.player ? '白棋' : '黑棋') + '胜！';
                        _this.waiting = true;
                        // setTimeout(() => {
                        // this.init(this.rowNum, this.colNum, this.row, this.col);
                        // }, 3000)
                    } else {
                        _this.player = !_this.player;
                    }
                }
            });
        }
    }]);

    return GAME;
}();

exports.GAME = GAME;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map