/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  Square = __webpack_require__(653);


function RandomNumber(min, max, step){ //функция рандома еды
    return step * Math.floor(Math.random() * (max - min) / step + min / step);
}

class Food extends Square{
    constructor(width_field,height_field,color) {
        super(120 + RandomNumber(0,50*width_field,50),RandomNumber(0,50*height_field,50),50,color);
    }
}
module.exports = Food ;

/***/ }),

/***/ 632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  Square = __webpack_require__(653);
class Grid {
    constructor(width_field,height_field,color) {
        this.width_field = width_field; // размер игрового поля (width_field) х (height_field)
        this.height_field = height_field; // количество квадратов в строку и в столбик
        this._squares = [];
        this.color = color;
        for (let row = 0; row < this.height_field; row++){  // rows - количество строк (с квадратиками)
           this._rowSquare = [];
            for (let column = 0; column < this.width_field; column++) { // columns - количество столбцов (квадратов)
                this._rowSquare.push(new Square(120 + (column * 50),(row * 50),50,this.color));
            }
            this._squares.push(this._rowSquare);
        }
    }
    get Squares(){
        return this._squares;
    }
}

module.exports = Grid ;



/***/ }),

/***/ 61:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  Square = __webpack_require__(653);


class Snake{
    constructor(lengthSnake,color) {
       this.length = lengthSnake;
       this.color = color;
       this._cells = [];
        for (let row = 0; row < this.length; row++){  // rows - количество строк (с квадратиками)
            this._cells.push(new Square(220 + 50,50 + (row * 50),50,this.color));
        }
    }
    get Cells(){
        return this._cells;
    }
    Shrink(){
        return this._cells.pop(); // удаление хвоста
    };
    Move(direction){ //добавление головы в зависимости от направления
        if (direction == "right"){
            let square = new Square((this._cells[0].left_indent)+50, this._cells[0].top_indent,50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "left"){
            let square = new Square((this._cells[0].left_indent)-50,(this._cells[0].top_indent),50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "down"){
            let square = new Square((this._cells[0].left_indent),(this._cells[0].top_indent)+50,50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "up"){
            let square = new Square((this._cells[0].left_indent),(this._cells[0].top_indent)-50,50,"red");
            this._cells.unshift(square);
            return square;
        }

    };
}
module.exports = Snake ;

/***/ }),

/***/ 653:
/***/ ((module) => {

class Square {
    constructor(left_indent,top_indent,side_of_square,color){
        this.top_indent = top_indent;// отступ сверху - x  (x,y,w,h)
        this.left_indent = left_indent;// отступ слева - y
        this.side_of_square = side_of_square; // сторона квадрата - и w и h - т.к. это квадрат
        this.color = color;
    }
}
module.exports = Square ;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");


const Grid = __webpack_require__(632);
const Food = __webpack_require__(308);
const Snake = __webpack_require__(61);


function Draw(square){  // функция отрисовки
    context.strokeStyle = "#eee";
    context.lineWidth = 1.5;
    context.strokeRect((square.left_indent + (square.side_of_square)),(square.top_indent + (square.side_of_square)), square.side_of_square, square.side_of_square);
    context.fillRect((square.left_indent + (square.side_of_square)),(square.top_indent+ (square.side_of_square)), square.side_of_square, square.side_of_square);
}
function DrawSquare(square){        //функция отрисовки поля,змеи,еды (где цвет изначально задан в классе)
    context.fillStyle = square.color;
    Draw(square);
}
function DrawDefaultSquare(square,color){ //функция отрисовки чего-то нового (отдельного квадрата,обрубания хвоста)
    context.fillStyle = color;
    Draw(square);
}

let grid = new Grid(12,12,"green");
let squares = grid.Squares;
let food =  new Food(grid.width_field,grid.height_field,"yellow");
let snake = new Snake(4,"red");
let bodySnake = snake.Cells;
function RenewFood() { //функция создания еды не на змее (пересоздается, пока не окажется на поле)
    let needRecheck;
    do{
        needRecheck = false;
        for (let i = 0; i < bodySnake.length; i++) {
            if ((bodySnake[i].left_indent == food.left_indent) && (bodySnake[i].top_indent == food.top_indent)) {
                food = new Food(grid.width_field, grid.height_field,"yellow");
                needRecheck = true;
                break;
            }
        }
    } while (needRecheck);
}

// новая игра
function NewGame(squares,bodySnake,food){
    for (let square of squares){
        for (let cell of square){
            DrawSquare(cell); // отрисовка поля
        }
    }
    for (let square of bodySnake){
        DrawSquare(square);  // отрисовка змеи
    }
    RenewFood();
    DrawSquare(food); // отрисовка еды
}
NewGame(squares,bodySnake,food);

let count =0;

//удаление хвоста и отрисовка новой еды
function DeleteTailAndDrawNewFood(){
    if ((bodySnake[0].left_indent != food.left_indent) ||(bodySnake[0].top_indent != food.top_indent)){
        DrawDefaultSquare(snake.Shrink(),grid.color); // удаление хвоста
    }
    else{
        count++;
        RenewFood();
        DrawSquare(food);
    }
}

let direction = "right";
let stop;
// начало игры
function StartGame(){
 stop = setInterval(() => {
        DrawSquare(snake.Move(direction)); // добавление головы
        DeleteTailAndDrawNewFood();

        // проверка если змея заходит за рамки поля
        if ((bodySnake[0].top_indent <  0 ) || (bodySnake[0].top_indent>(grid.width_field-1)*50)  || (bodySnake[0].left_indent<120) ||  (bodySnake[0].left_indent>(120+(grid.width_field-1)*50)) ) {
            DrawDefaultSquare(bodySnake[0],"#eee");
            document.getElementById("win").innerHTML = "Вы проиграли!"; // выводим фразу о проигрыше
           GameOver();
        }
        // проверка если змея врежется в саму себя
        for (let i = 1; i < bodySnake.length; i++) {
            if((bodySnake[0].left_indent == bodySnake[i].left_indent)&&(bodySnake[0].top_indent == bodySnake[i].top_indent)){
                document.getElementById("win").innerHTML = "Вы проиграли!"; // выводим фразу о проигрыше
                GameOver();
            }
        }
        //проверка на заполненность поля полностью змеей
        if(grid.width_field*grid.height_field == bodySnake.length){
            document.getElementById("win").innerHTML = "Вы выиграли!"; // выводим фразу о выигрыше
            GameOver();
        }
  }, 400)
}

let maxScore = 0;
// конец игры
function GameOver() {
    clearInterval(stop);
    document.getElementById("sum_score").innerHTML = "Заработанные очки: " + count; // выводим сумму очков
    if(count > maxScore){
      maxScore = count;
    }
    document.getElementById("max").innerHTML = "Максимальные очки за игры: " + maxScore; // выводим сумму очков
    count = 0;
    document.getElementById("ModalWindowEnd").style.display = "block";
}

// сброс - начало новой игры
document.getElementsByClassName("close")[0].addEventListener('click', function() { // закрыть всплывающее окно (игра завершена)
    document.getElementById("ModalWindowEnd").style.display = "none";
    food =  new Food(grid.width_field,grid.height_field,"yellow");
    snake = new Snake(4,"red");
    bodySnake = snake.Cells;
    NewGame(squares,bodySnake,food);
    direction = "right";
    StartGame();
});



StartGame();

document.addEventListener('keydown', function(event) { // управление игрой
    if (((event.code == 'KeyD')||(event.code == 'ArrowRight')) && (direction != "left")) {
        direction = "right";
    }
    if (((event.code == 'KeyA')||(event.code == 'ArrowLeft')) && (direction != "right")){
        direction = "left";
    }
    if (((event.code == 'KeyS')||(event.code == 'ArrowDown')) && (direction != "up")){
        direction = "down";
    }
    if (((event.code == 'KeyW')||(event.code == 'ArrowUp')) && (direction != "down")){
        direction = "up";
    }

    DrawSquare(food);
});






})();

/******/ })()
;