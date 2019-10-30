let a = 7;
// a = 0;
// a = true;
// a = false;


// ***  (===) - значит, что проверка идет по содержимому и по типу
let b = '5';
a = 5;

// *** (5 == '5') // true
// *** (5 === '5') // false

if (a === b) {
  console.log("yes");
} else {
  console.log("no");
}


/*
  * Пример: есть дом 3 подъезда
  * 1-й подъезд - с 1 по 10 квартиры
  * 2-й подъезд - с 11 по 20 квартиры
  * 3-й подъезд - с 21 по 30 квартиры
*/

// * Укажите пожалуйста № подъезда Андрея
porch = 30;

if (porch > 0 && porch <= 10) {
  console.log('квартира находиться в 1-м подъезде');
} else if (porch > 10 && porch <= 20) {
  console.log('квартира находиться в  2-м подъезде');
} else if (porch > 20 && porch <= 30){
  console.log('квартира находиться в 3-м подъезде');
} else {
  console.log('Указанной квартиры нет');
}



// * Градация людей по возрасту
let age = 11;

if (age > 0 && age <= 1) {
  console.log('Грудной ребенок');
} else if (age > 1 && age <= 3) {
  console.log('Раннее детство');
} else if (age > 3 && age <= 6) {
  console.log('Дошкольный возраст');
} else if (age >= 7 && age <= 10) {
  console.log('Младшый школьный возраст');
} else if (age >= 11 && age <= 17) {
  console.log('Подростковый возраст');
} else if (age >= 18 && age <= 21) {
  console.log('Юношеский возраст');
} else if (age > 21 && age <= 35) {
  console.log('Зрелый возраст');
} else if (age >= 36 && age <= 55) {
  console.log('Средний возраст');
} else if (age > 55 && age <= 75) {
  console.log('Пожилой возраст');
} else if (age >= 90) {
  console.log('Долгожители');
} else {
  console.log('Градация не опеределена');
}







/*
  * TASK 
  * Угадай число
  * parseInt - метод parseInt() принимает строку в качестве аргумента и возвращает число
  * isNaN - функция isNaN() определяет является ли литерал, или переменная нечисловым значение (NaN) или нет.
  * location.reload() - перезагрузка страницы
*/

let r = Math.random();
r = r * 10;
r = Math.round(r);
console.log(r);

// let number = Math.round(Math.random()*10); // Запись выражения в 1 строку.


// * Получаем  элемент "<input type="number" id="user_number">" " в переменную для работы с ним в js
let userNumber = document.querySelector('#user_number');
console.log(userNumber);


// * Получаем элемент "<button id="btn">Check</button>"
document.querySelector('#btn').onclick = checkNumber

// * Пишем функцию проверки вводимого числа
function checkNumber() {
  let num = userNumber.value; // проверка значения вводимого числа пользователем
  num = parseInt(num); // перевод строки в число
  console.log(num);
  // isNaN('aaa) = true - да это не число
  // isNaN(4) = false да это число
  if (!isNaN(num)) {

  } else {
    alert('Введите корректное число');
  } if (num == r) {
    alert('Вы угадали!!!');
    location.reload();
  } else {
    alert('Пробуй еще!')
  }
}

// OPTION II
// function checkNumber() {
//   let num = userNumber.value;
//   num.parseInt(num);
//   console.log(num);

//   if(isNaN(num)) {
//     alert("Введите корректное число!")
//   } else {
//     if(num = r) {
//       alert("Поздравляю, Вы угадали!");
//       location.reload;
//     } else {
//       alert("Попробуйте еще!")
//     }
//   }
// }



