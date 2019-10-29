
// *** Вывести в консоль слово Hello по нажатию клавиши

console.log("Hello"); // Hello


function hello () {
  console.log("Heloo");
}

hello(); // вызов функции
hello(); // вызов функции 2
hello(); // вызов функции 3


function hello2 () {
  console.log('HELLOOOOOOOOOOO');
  hello3();
}

function hello3 () {
  console.log('helloooooo');
}

hello2(); // HELLOOOOOOOOOOO & // helloooooo


// ПОКАЗАТЬ / СКРЫТЬ МОДАЛЬНОЕ ОКНО ПО НАЖАНИТЮ НА КНОПКУ
let btnShow = document.querySelector('#show-modal');
let btnHide = document.querySelector('#hide-modal');

// *** пишем функцию - показать модальное окно
function showModalOne () {
  let modalOne = document.querySelector('.modal');
  modalOne.hidden = false;
  modalOne.style.backgroundColor = 'red';
  modalOne.style.borderRadius = '30px';
  modalOne.style.border = '5px solid #000000';
}

// *** вызываем функцию показать модальное окно!
btnShow.onclick = showModalOne;

// *** пишем функцию скрыть модальное окно
function hideModalOne () {
  let modalOne = document.querySelector('.modal');
  modalOne.hidden = true;
}

// *** вызываем функцию скрыть модальное окно
btnHide.onclick = hideModalOne;



// *** События - учимся вызывать функции по нажатии на какую-либо клавишу
let btn = document.querySelector('#btn'); // кнопка 
console.log(btn); // <button id="btn">Push me</button> 


// скрыть кнопку
// btn.hidden = true;

btn.onclick = hello2; // при нажатии кнопки вызывается функция
// *** Важно, если мы вызываем что-то по событию, мы пишим это без скобок, иначе функция сразу вызовется.

// *** Вызываем модальное окно 
let showModal = document.querySelector('#show-modal'); // кнопка show-modal
console.log(showModal);


/* 
  * Написать 2 функции, которые бы при клике на кнопки показывали и скрывали модальное окно.
*/
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function showModalWindow () {
  let showWindow = document.querySelector('.modalWindow');
  showWindow.style.display = 'block';
}
btn1.onclick = showModalWindow;


function closeModalWindow () {
  let showWindow = document.querySelector('.modalWindow');
  showWindow.style.display = 'none';
}
btn2.onclick = closeModalWindow; 




/* 
  * TASK #2
  * Напишите функцию, которая складывает два числа. 
  * Числа прописаны внутри функции. 
  * Функция выполняется при нажатии на кнопку.
*/

function sumTwoNumbers (a, b) {
  return a + b;
}
// console.log(sumTwoNumbers(7, 8))

let btnSum = document.querySelector('.Sum');
btnSum.onclick = console.log(sumTwoNumbers(7,8));














