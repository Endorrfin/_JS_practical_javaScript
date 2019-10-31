/**
|--------------------------------------------------
  ======= <<<--- TASK #1 -  --->>>  =======
Повторите действия указанные в уроке. Добавьте кнопку, при нажатии на которую считывается цвет выбранный пользователем 
(input type=color), и применяется к фону страницы.
|--------------------------------------------------
*/

document.querySelector('#btn-color').onclick = () => {
  document.body.style.backgroundColor = (document.querySelector('.input-color').value);
};


/**
|--------------------------------------------------
  ======= <<<--- TASK #2 -  --->>>  =======
Создайте два input[type=color]. В одном пользователь может выбрать цвет фона, во втором цвет текста. 
При нажатии на кнопку Применить - примените эти цвета к странице. Также добавьте кнопку сброса цвета на черный-белый.  
|--------------------------------------------------
*/

document.querySelector('#btn-colorful').onclick = () => {
  document.body.style.backgroundColor = (document.querySelector('.input-background-color').value);
  document.body.style.color = (document.querySelector('.input-text-color').value);
};

// OPTION I
// document.querySelector('#btn-black-and-white').onclick = () => {
//   location.reload();
// };

// OPTION II
document.querySelector('#btn-black-and-white').onclick = () => {
  document.body.style.backgroundColor = '#000';
  document.body.style.color = '#fff';
};


/**
|--------------------------------------------------
  ======= <<<--- TASK #3 & 4 -  --->>>  =======
Добавьте input[type=range] начальным значением которого есть число 14, а конечным 48. Ползунок установлен на 16. 
При изменении положения ползунка меняйте размер текста в соответствии со значением.

Рядом с созданным ползунком добавьте span куда выводите текущее значение ползунка. 
Для этого используйте событие input, oninput.
  
|--------------------------------------------------
*/

// document.querySelector('.input-range').value = () => {
//   document.body.style.fontSize = 'px';
// };
// changeFontSize

const inputRange = document.querySelector('.input-range');
const outputSpan = document.querySelector('#output-value');

inputRange.oninput = () => {
  size = inputRange.value;
  document.body.style.fontSize = size + 'px';
  outputSpan.innerHTML = size;
};



/**
|--------------------------------------------------
  ======= <<<--- TASK #5 -  --->>>  =======
Создайте три input type=range. Значения от нуля до 255. Создайте блок, цвет rgb которого определятеся значением на ползунках. 
При изменении положения ползунков, изменяется цвет блока.
Возле каждого ползунка выводить текущее значение цвета.
  
|--------------------------------------------------
*/

const inputR = document.querySelector('.input-red');
console.log(inputR)
const spanR = document.querySelector('#span-red');
console.log(spanR)
const inputG = document.querySelector('.input-green');
console.log(inputG)
const spanG = document.querySelector('#span-green');
console.log(spanG)
const inputB = document.querySelector('.input-blue');
console.log(inputB)
const spanB = document.querySelector('#span-blue');
console.log(spanB)
const colorBlock = document.querySelector('.color-block');
console.log(colorBlock)
const colorGeneral = document.querySelector('.color-general');

colorGeneral.oninput = function () {
  one = inputR.value;
  spanR.innerHTML= one; 
  two = inputG.value;
  spanG.innerHTML = two;
  there = inputB.value;
  spanB.innerHTML = there;
  // body.style.backgroundColor = 'rgba(' + one + ', ' + two + ', ' + there + ')';
  colorBlock.style.backgroundColor = 'rgb(' + one + ', ' + two + ', ' + there + ')';
};



