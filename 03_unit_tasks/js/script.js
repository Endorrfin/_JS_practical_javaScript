/**
|--------------------------------------------------
| ======= <<<--- TASK #1 -  --->>>  =======
|--------------------------------------------------
*/

/*
Создайте блок с id="modal". Добавьте две кнопки с разными id. 
На кнопки добавьте функции, одна из которых скрывает блок modal, вторая отображает.
*/

let showModal = document.querySelector('#btn-display');
let hideModal = document.querySelector('#btn-hidden');

showModal.addEventListener('click', function () {
  show();
});

hideModal.addEventListener('click', function () {
  hide();
});

function show() {
  let modal = document.querySelector('.modal');
  modal.style.display = 'block';
}
// show();

function hide() {
  let modal = document.querySelector('.modal');
  modal.style.display = 'none';
}
// hide();


/**
|--------------------------------------------------
| ======= <<<--- TASK #2 -  --->>>  =======
|--------------------------------------------------
*/
/* Напишите функцию, которая складывает два числа. Числа прописаны внутри функции. Функция выполняется при нажатии на кнопку. */

// OPTION I
let btnSum = document.querySelector("#btn-sum");
btnSum.onclick = displaySum;

function displaySum() {
  let inputNumber1 = document.querySelector('#inputFirstNumber').value;
  let inputNumber2 = document.querySelector('#inputSecondNumber').value;
  let transformNumber1 = parseInt(inputNumber1);
  let transformNumber2 = parseInt(inputNumber2);
  let result = transformNumber1 + transformNumber2;
  let output = document.querySelector('.resultTwoNumbers').value; // не получается вывести результат сложения в result
  output.innerHTML = result;

  console.log(result);
  // document.querySelector('.unit3Task2').innerHTML = result;
}


/**
|--------------------------------------------------
| ======= <<<--- TASK #3 -  --->>>  =======
|--------------------------------------------------
*/
/* 
Создайте кнопку, добавьте функцию при нажатии на кнопку. Функция должна выводить alert с приветствием.
*/

let btnHello = document.querySelector('#btn-hello');
btnHello.onclick = greeting;

function greeting() {
  alert("Hello every one!");
}


/**
|--------------------------------------------------
| ======= <<<--- TASK #4 -  --->>>  =======
|--------------------------------------------------
*/
/* 
Создайте кнопку которая при нажатии запускает две произвольные функции. 
*/

const btnStart = document.querySelector('#btn-start2f');
btnStart.onclick = start2Functions;

function start2Functions() {
  start1();
  start2();
}

function start1() {
  alert('JavaScript is a great programming language!');
}

function start2() {
  alert('Go to learn JavaScript!')
}

/**
|--------------------------------------------------
| ======= <<<--- TASK #5 -  --->>>  =======
|--------------------------------------------------
*/

/* 
Создайте кнопку, нажатие на которую скрывает сама себя. 
*/

const btnHideButton = document.querySelector('#btn-hidYourself');
btnHideButton.onclick = functionHideYourself;

function functionHideYourself () {
  btnHideButton.style.display = 'none';
}

/**
|--------------------------------------------------
| ======= <<<--- TASK #6 -  --->>>  =======
|--------------------------------------------------
*/
/* Создайте кнопку, которая при нажатии выводит вместо текста на себе - предупреждение "не нажимать".*/
const btnNotPush = document.querySelector('#btn-not-push');
btnNotPush.onclick = functionNotPush;

function functionNotPush () {
  btnNotPush.innerHTML = "Не нажимать";
}