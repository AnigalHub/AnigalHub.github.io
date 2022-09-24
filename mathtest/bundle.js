/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const RandomNumber = __webpack_require__(651);
function DisplayOfNumbersInMenu(){ //Вывод цифр в меню (для красоты, с рандомом)
    let numeric1 = RandomNumber(0,50);
    let numeric2 = RandomNumber(0,50);
    document.getElementsByClassName("numeric1")[0].innerHTML = numeric1; // цифры для сложения
    document.getElementsByClassName("numeric2")[0].innerHTML = numeric2;

    numeric1 = RandomNumber(0,50);
    numeric2 = RandomNumber(0,50);
    document.getElementsByClassName("numeric1")[1].innerHTML = numeric1; // цифры для умножения
    document.getElementsByClassName("numeric2")[1].innerHTML = numeric2;

    numeric1 = RandomNumber(0,50);
    numeric2 = RandomNumber(0,50);
    if(numeric1 < numeric2){
        numeric1 = Math.floor(numeric2 + (numeric2 / 100 * RandomNumber(25,100)));
    }
    document.getElementsByClassName("numeric1")[2].innerHTML = numeric1; // цифры для вычитания
    document.getElementsByClassName("numeric2")[2].innerHTML = numeric2;

    do{
        numeric1 = RandomNumber(1,50);
        numeric2 = RandomNumber(1,50);
        document.getElementsByClassName("numeric1")[3].innerHTML = numeric1; // цифры для деления
        document.getElementsByClassName("numeric2")[3].innerHTML = numeric2;
    }
    while(numeric1%numeric2 != 0)
}
module.exports = DisplayOfNumbersInMenu ;

/***/ }),

/***/ 830:
/***/ ((module) => {

function RandomElementArray(array) {
    array.sort(() => Math.random() - 0.5);
}
module.exports = RandomElementArray;

/***/ }),

/***/ 651:
/***/ ((module) => {

function RandomNumber(min, max) {    // Рандом числа от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
module.exports = RandomNumber;


/***/ }),

/***/ 299:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const RandomElementArray = __webpack_require__(830);
const RandomNumber = __webpack_require__(651);
let question = document.getElementById("question"); // Вопрос (Пример)
let answers = document.getElementById("answers"); // Ответы

class Test { //Класс - Тест
    constructor(number1,number2,answer1,answer2) {
        this.ArrayAnswer = [];   //пустой массив
        this._correct_answer = 0;  // правильный ответ
        this._number1 = number1;   // первое число для подсчета/вопроса
        this._number2 = number2;   // второе число для подсчета/вопроса
        this._answer1 = answer1;   // первый ответ для вывода
        this._answer2 = answer2;   // второй ответ для вывода
        do{                                       // чтобы не было одинаковых ответов
            this._answer1 = Math.floor(this._answer2 + (this._answer2 / 100 * RandomNumber(25,100))); //округляем ((2-е число) + (от 25% до 100% 2-го числа - рандом))
        }
        while((this._answer1 == this._answer2) || (this._answer1 == this._correct_answer))
    }

    CreateTest(option){
        if (option == "+"){
            question.innerHTML = this._number1 + "+" + this._number2 + "="; // выводим вопрос
            this._correct_answer = this._number1+this._number2;              // считаем сумму
        }
        if(option == "-"){
            if(this._number1 < this._number2){ // чтобы ответ не получился с минусом, можно и убрать эту проверку
                this._number1 = Math.floor(this._number2 + (this._number2 / 100 * RandomNumber(25,100))); // уменьшаемое (1-ое число) = округляем ((2-е число) + (от 25% до 100% 2-го числа - рандом))
            }
            this._correct_answer = this._number1-this._number2;              // считаем вычитание
            question.innerHTML = this._number1 + "-" + this._number2 + "="; // выводим вопрос
        }
        if(option == "*"){
            question.innerHTML = this._number1 + "∙" + this._number2 + "="; // выводим вопрос
            this._correct_answer = this._number1*this._number2;              // считаем умножение
        }
        if(option == ":"){
            do{                                       // чтобы не было остатка, можно и убрать эту проверку
                this._number1 = RandomNumber(1,200);
                this._number2 = RandomNumber(1,200);
            }
            while(this._number1%this._number2 != 0)
            this._correct_answer = this._number1/this._number2;              // считаем деление
            question.innerHTML = this._number1 + ":" + this._number2 + "="; // выводим вопрос
        }
        this.ArrayAnswer.push(this._correct_answer,this._answer1,this._answer2); // заполняем массив
        RandomElementArray(this.ArrayAnswer);                                 // вызов функции на рандом элементов массива (меняем местами)
        for (let i = 0; i <  this.ArrayAnswer.length; i++) {                  // выводим варианты ответов
            answers.innerHTML += "<div class='col'><button class='buttons_answers'>"+ this.ArrayAnswer[i] + "</button></div>";
        }
    }
    get correct_answer(){
        return this._correct_answer;
    }
    get number1(){
        return this._number1;
    }
    get number2(){
        return this._number2;
    }
    get answer1(){
        return this._answer1;
    }
    get answer2(){
        return this._answer2;
    }
}
module.exports = Test ;

/***/ }),

/***/ 418:
/***/ ((module) => {

let timer = document.getElementById("timer");
let modal_window_end = document.getElementById("ModalWindowEnd"); // Модальное окно "Игра завершена"

class TimeСounter { //Класс - Счетчик времени (Таймер)
    constructor(defaultCount) {
        this.currentInterval = null; // номер текущего таймера
    }
    StartTimeСounter(defaultCount) {  //метод запуска счетчика
        this.count = defaultCount;  // цифра от которой начинаем отсчет таймера

        if (this.currentInterval == null) {
            this.currentInterval = setInterval(() => {
                if (this.count >= 0) {
                    timer.innerHTML =  this.count--;
                    if(this.count == -1){
                        modal_window_end.style.display = "block"; // выводим сообщение
                    }
                }
            }, 1000)
        }
    }
    StopTimeСounter(){ // метод остановки счетчика
        clearInterval(this.currentInterval); // остановка счетчика
        this.currentInterval = null; // счетчик становится пустым
        timer.innerHTML = this.count;
        if (this.count == -1){
            timer.innerHTML = 0;
        }
        return this.count;
    }
}
module.exports = TimeСounter ;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
const TimeСounter = __webpack_require__(418);
const RandomNumber = __webpack_require__(651);
const DisplayOfNumbersInMenu = __webpack_require__(147);

const Test = __webpack_require__(299);
let timeCounter = new TimeСounter();
let time = 60; // время таймера
let test = new Test(RandomNumber(0,50),RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50));
let name_game = document.getElementById("name_game"); //название игры
let menu = document.getElementById("menu"); // меню игры
let playing_filed = document.getElementById("playing_field"); // игровое поле
let question = document.getElementById("question"); // Вопрос (Пример)
let selected_answer = document.getElementById("selected_answer"); //выбранный ответ
let answers = document.getElementById("answers"); // Ответы
let output_count = document.getElementById("score"); // счетчик баллов (количество очков)
let next_question = document.getElementById('next_question'); //"Далее"
let modal_window_stop = document.getElementById("ModalWindowStop"); // Модальное окно "Игра приостановлена"
let modal_window_end = document.getElementById("ModalWindowEnd"); // Модальное окно "Игра завершена"
let output_sum_score = document.getElementById("sum_score"); //баллы за всю игру
let sum_score = 0; //сумма баллов



DisplayOfNumbersInMenu();//Вывод цифр в меню (для красоты, с рандомом)

// Поиск верного ответа и Подсчет суммы баллов
function SearchAnswersAndSumScore(count){
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("buttons_answers")[i].addEventListener('click', function() {
            if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.correct_answer){ // проверка на правильный ответ
                document.getElementsByClassName("buttons_answers")[i].style.background = "green";
                count++;
                sum_score++;
                output_count.innerHTML = "Ваш ответ" + "<span style='color:green; font-weight: bold;'>" + " верный" + "</span>" +", общее количество очков: " + "<span style='font-weight: bold;'>"+ count + "</span>";
                selected_answer.innerHTML = test.correct_answer;
                selected_answer.style.color = "green";
            }
            else { //проверка первый непрвильный ответ
                document.getElementsByClassName("buttons_answers")[i].style.background = "red";
                selected_answer.innerHTML = document.getElementsByClassName("buttons_answers")[i].innerHTML;
                selected_answer.style.color = "red";
                output_count.innerHTML = "Ваш ответ" + "<span style='color:red;font-weight: bold;'>" + " неверный" + "</span>" +", общее количество очков: "  +"<span style='font-weight: bold;'>" +  count  + "</span>";
            }

            answers.innerHTML = ""; // не выводим предыдущие ответы по прошлому вопросу (примеру)
            timeCounter.StopTimeСounter(); // останавливаем время (таймер)
            next_question.style.display = "block"; // выводим кнопку "Далее"
            return count;
        });
    }
    output_sum_score.innerHTML = "Ваши очки составили:" + sum_score; // выводим сумму очков
}
//Начало игры
function StartGame(){
    timeCounter.StartTimeСounter(time);// вызов таймера
    selected_answer.style.display = "initial";
    name_game.style.display = "none";       // убираем название игры
    menu.style.display = "none"; // убираем меню
    playing_filed.style.display = "block";  // выводим поле игры

}
// Сброс
function Discharge() {
    name_game.style.display = "block";         // возврат на начало - выводим название
    menu.style.display = "flex";              // выводим меню
    playing_filed.style.display = "none";     // прячем игровое поле
    timeCounter.StartTimeСounter(time);
    answers.innerHTML = "";
    test = new Test(RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50));
    output_count.innerHTML = " ";
    selected_answer.innerHTML = "?";
    selected_answer.style.color = "black";
    sum_score = 0;
    modal_window_end.style.display = "none";
    next_question.style.display = "none";
    DisplayOfNumbersInMenu();
}
//Выбор следующего вопроса
function ChoosingNextQuestion(){
    answers.innerHTML = "";
    output_count.innerHTML = "";
    selected_answer.innerHTML = "?";
    selected_answer.style.color = "black";
    
    if (question.innerHTML.includes("-") == true){
        test.CreateTest("-");
    }
    if (question.innerHTML.includes("+") == true){
        test.CreateTest("+");
    }
    if (question.innerHTML.includes("∙") == true){
        test.CreateTest("*");
    }
    if (question.innerHTML.includes(":") == true){
        test.CreateTest(":");
    }
}

//Сложение
document.getElementById('addition').addEventListener('click', function() {
    StartGame();
    test.CreateTest("+");                                    // вызов вопроса на сложение со списком ответов
    SearchAnswersAndSumScore(sum_score);                            //вызов функции на поиск ответа и суммы баллов
});
//Вычитание
document.getElementById('subtraction').addEventListener('click', function() {
    StartGame();                                                    //вызов функции на старт игры
    test.CreateTest("-");                                     // вызов вопроса на вычитание со списком ответов
    SearchAnswersAndSumScore(sum_score);                            //вызов функции на поиск ответа и суммы баллов
});
//Умножение
document.getElementById('multiplication').addEventListener('click', function() {
    StartGame();                                                     // вызов функции на старт игры
    test.CreateTest("*");                                     // вызов вопроса на умножение со списком ответов
    SearchAnswersAndSumScore(sum_score);                            // вызов функции на поиск ответа и суммы баллов
});
//Деление
document.getElementById('division').addEventListener('click', function() {
    StartGame();                                                     // вызов функции на старт игры
    test.CreateTest(":");                                      // вызов вопроса на деление со списком ответов
    SearchAnswersAndSumScore(sum_score);                             // вызов функции на поиск ответа и суммы баллов
});

//Далее
document.getElementById('next_question').addEventListener('click', function() {
    test = new Test(RandomNumber(0,50),RandomNumber(1,50),RandomNumber(0,50),RandomNumber(0,50));
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter());       // вызов метода на продолжение  таймера с момента останова
    ChoosingNextQuestion();                                            // вызов функции на выбор следующего вопроса
    SearchAnswersAndSumScore(sum_score);                               // вызов функции на поиск ответа и суммы баллов
});

//Остановить
document.getElementById("stop_game").addEventListener('click', function() {
    timeCounter.StopTimeСounter();                                      // вызов метода на остановку таймера
    modal_window_stop.style.display = "block";                          // выводим сообщение об остановке игры
});

//Продолжить
document.getElementsByClassName("close")[0].addEventListener('click', function() {
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter());        // вызов метода на продолжение  таймера с момента останова
    modal_window_stop.style.display = "none";                           // убираем сообщение об остановке игры
});
//Закрыть модальное окно с подсчетом очков за игру
document.getElementsByClassName("close")[1].addEventListener('click', function() {
    modal_window_stop.style.display = "none";                           // убираем сообщение об окончании игры
    Discharge();                                                        // вызов функции на сброс игры
});
//Досрочно завершить - "Завершить"
document.getElementById('finish').addEventListener('click', function() {
    modal_window_end.style.display = "block";                          // выводим сообщение об окончании игры
    timeCounter.StopTimeСounter();                                     // вызов метода на остановку таймера
    output_sum_score.innerHTML = "Ваши очки составили:" + sum_score;   // выводим сумму очков
});

//Выйти из игры - "Возврат"
document.getElementById('return_game').addEventListener('click', function() {
   Discharge();                                                        //вызов функции на сброс игры
});




})();

/******/ })()
;