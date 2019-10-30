/**
|--------------------------------------------------
  ======= <<<--- TASK #1 -  --->>>  =======
Игра Угадай число.
С помощью функции при загрузке страницы генерируйте случайное число от 0 до 9. Добавьте его в переменную.
Создайте input[type = text] и кнопку. На кнопку добавьте функцию, которая читает введенное
пользователем число в элемент input. Проверьте введеное число: - не ввел ли пользователь пустую
строку - ввел ли пользователь число.

Сравните введенное и загаданное число. Если они совпали - выведите alert с поздравлением и
перезагрузите страницу. Если не совпали - выведите alert с сообщением (больше или меньше
введенное число загаданному.
|--------------------------------------------------
*/

let r = Math.round(Math.random() * 10);
console.log(r);

let inputNumber = document.querySelector('#input-user-number');
document.querySelector('#btn-check-input').onclick = checkNumber;

function checkNumber() {
  let num = inputNumber.value;
  num = parseInt(num);
  console.log(num);

  if ((!isNaN(num)) && num == r) { // isNaN - проверка введено ли число.
    alert("Congratulations! You guessed the number!");
    location.reload(); // перезагрузка страницы
  } else if ((!isNaN(num)) && num !== r) {
    alert("Try again input a number");
  } else {
    alert("input the correct number");
  }
}

/**
|--------------------------------------------------
  ======= <<<--- TASK #2 -  --->>>  =======
Создайте кнопку. После первого нажатия кнопка должна сменить текст на себе на "Не нажимать", и
вывести на экран количество оставшихся попыток - 2. После 2 нажатий кнопки, она должна скрыть
сама себя.
Внимание! Подсказка!
Задачи где нужно отследить число нажатий, или действий решаются одинаково с помощью переменной
счетчика, причем счетчик объявляется за пределами функции - иначе он не сможет сохранить свое
значение и при каждом запуске функции будет сбрасываться на стартовое значение. Потом внутри
функции мы увеличиваем счетчик и в зависимости от его значения, делаем необходимые действия.
let count = 0;
element.onclick = function(){
count++;
if (count == )...
if (count == )...
if (count == )...
}
|--------------------------------------------------
*/


let clickButton = document.querySelector("#btn-multifunctional");
countClick = 3;

function clickButton3Times() {
  countClick--;
  clickButton.innerHTML = "Не нажимать";
  alert("Осталось попыток: " + countClick)
  if (countClick <= 0) {
    // clickButton.hidden = true;
    clickButton.style.display = 'none';
  };
};

clickButton.onclick = clickButton3Times;



/**
|--------------------------------------------------
  ======= <<<--- TASK #3 -  --->>>  =======
  Создайте два поля для ввода чисел. После ввода и нажатия кнопки - выведите большее число.
<br>
<b>Hint</b>
Не забываем, что все что мы получаем из input - строки. А строки сравниваются посимвольно.
Т.е. две строки ab и aac будет большей строка ab - поскольку первые символы равны, а вот вторые
нет, символ b больше чем a. Более подробно почитать можно здесь.
|--------------------------------------------------
*/

let btnCompare = document.querySelector('#btn-compare');
let inputNumberOne = document.querySelector('#input-first-number');
let inputNumberTwo = document.querySelector('#input-second-number');
let outputLargerNumber = document.querySelector('#output-larger-number');
let outputMoreNumber = document.querySelector('.unit4-task3');

function maxNumber() {
  // e.preventDefault();
  let numberOne = parseInt(inputNumberOne.value);
  let numberTwo = parseInt(inputNumberTwo.value);
  if (numberOne > numberTwo) {
    // outputLargerNumber.innerHTML = numberOne;
    outputMoreNumber.innerHTML = numberOne;
  } else if (numberOne < numberTwo) {
    // outputLargerNumber.innerHTML = numberTwo;
    outputMoreNumber.innerHTML = numberTwo;
  } else if (numberOne === numberTwo) {
    // outputLargerNumber.innerHTML = 'numbers are equivalent';
    outputMoreNumber.innerHTML = 'numbers are equivalent';

  } else {
    document.querySelector('#output-larger-number').innerHTML = 'input correct numbers';
  }
}

btnCompare.onclick = maxNumber;



/**
|--------------------------------------------------
  ======= <<<--- TASK #4 -  --->>>  =======
Создайте два поля. В одно пользователь вводит день рождения, во второй - месяц (в виде числа).
Выведите знак зодиака под каким родился пользователь.
Внимание! Подсказка!
Итак, мы ищем знак зодиака. Знак зодиака определяют три фактора: месяц (m), день от (d1), день до (d2). 
Для козерога даннаые параметры такие от 22 декабря до 19 января. Оооппс. 
Два месяца, что делать и тут рождаются чуда условия типа

if ( (m == 12 && d >= 22) || (m == 1 && d <=19) ) да, так можно, но даже прочитать сложно.
Хитрость этой задачи в том, что можно комбинировать данные условия для более легкого чтения.
Например, просто в лоб: if ( m==12 && d>=22) alert ("козерог");
if ( m == 1 && d <= 19) alert("козерог"); Не пугайтесь количеству условий, вы же программировать пришли? 
Можно и по другому if ( m==1 ){ if (d <=19) alert("Козерог") else alert("Водолей") }
|--------------------------------------------------
*/


let btnZodiac = document.querySelector('#btn-zodiac');
let outputZodiac = document.querySelector('.output-zodiac');


function definitionZodiac() {
  let inputBirthday = (document.querySelector('#input-birthday')).value;
  let inputBirthMonth = (document.querySelector('#input-birth-month')).value;
  if ((inputBirthday >= 22 && inputBirthday <= 31 && inputBirthMonth == 12 || inputBirthday > 0 && inputBirthday <= 19 && inputBirthMonth == 1)) {
    alert('Это Козерог ♑ с 22 декабря по 19 января ');
    location.reload();
  } else if ((inputBirthday >= 20 && inputBirthday <= 31 && inputBirthMonth == 1) || (inputBirthday > 0 && inputBirthday <= 19 && inputBirthMonth == 2)) {
    alert('Это Водолей ♒ с 20 января по 19 февраля ');
    location.reload();
  } else if ((inputBirthday >= 20 && inputBirthday <= 29 && inputBirthMonth == 2) || (inputBirthday > 0 && inputBirthday <= 20 && inputBirthMonth == 3)) {
    alert('Это Рыбы ♓ с 20 февраля по 21 марта '); // а если не высокосный год?
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 31 && inputBirthMonth == 3) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 4)) {
    alert('Это Овен ♈ с 22 марта по 21 апреля ');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 30 && inputBirthMonth == 4) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 5)) {
    alert('Это Телец ♉ с 22 апреля по 21 мая ');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 31 && inputBirthMonth == 5) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 6)) {
    alert('Это Близнецы ♊ с 22 мая по 21 июня	');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 30 && inputBirthMonth == 6) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 7)) {
    alert('Это Рак ♋ с 22 июня по 21 июля	');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 31 && inputBirthMonth == 7) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 8)) {
    alert('Это Лев ♌ с 22 июля по 21 августа	');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 31 && inputBirthMonth == 8) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 9)) {
    alert('Это Дева ♍ с 22 августа по 21 сентября	');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 30 && inputBirthMonth == 9) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 10)) {
    alert('Это Весы ♎ с 22 сентября по 21 октября	');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 31 && inputBirthMonth == 10) || (inputBirthday > 0 && inputBirthday <= 20 && inputBirthMonth == 11)) {
    alert('Это Скорпион ♏ с 22 октября по 20 ноября	');
    location.reload();
  } else if ((inputBirthday >= 22 && inputBirthday <= 30 && inputBirthMonth == 11) || (inputBirthday > 0 && inputBirthday <= 21 && inputBirthMonth == 12)) {
    alert('Это Стрелец ♐ с 22 ноября по 21 декабря ');
    location.reload();
  } else if (Number.isNaN(inputBirthday) || Number.isNaN(inputBirthMonth)) {
    alert('Введите корректное число') // не число ввести не возможно, поскольку - input type="number"
    location.reload();
  } else alert('В дате рождения, или месяце рождения ошибка, пожалуйста, введите корректные данные!');
  location.reload();
};

btnZodiac.onclick = definitionZodiac;


/**
|--------------------------------------------------
  ======= <<<--- TASK #5 -  --->>>  =======
Создайте input куда пользователь может ввести год рождения. Программа должна вывести символ года по китайскому календарю. Подумайте как можно упростить программу.
Внимание! Подсказка!
Итак, решаем задачу за китайские годы. Первое - годы повторяются с периодичностью 12 лет. Т.е. возьмем год крысы:
1972, 1984, 1996, 2008, 2020. Поделим на 12 и получим остаток

1972 % 12 = 4
1984 % 12 = 4
1996 % 12 = 4
т.е. зная остаток от деления на 12 мы легко определим знак. Теперь нам нужно прописать 12 условий вида: если остаток равен = чему-то то это год!
Вас пугает 12 if?
Не бойтесь, на курсах часто говорят что код должен быть коротким, но в реальной практике вы столкнетесь и с большим количеством кода! Вперед!
|--------------------------------------------------
*/


document.querySelector('#btn-сhinese-calendar').onclick = () => {
  let inputYearOfBirth = (document.querySelector('#inputYearOfBirthday')).value;
  inputYearOfBirth = parseInt(inputYearOfBirth);

  let NameOfChineseCalendar = 'Введен некорректный год';
   if (inputYearOfBirth % 12 == 0) {
    NameOfChineseCalendar = 'Это год обезьяны - 申';
  } else if (inputYearOfBirth % 12 == 1) {
    NameOfChineseCalendar = 'Это год петуха - 酉';
  } else if (inputYearOfBirth % 12 == 2) {
    NameOfChineseCalendar = 'Это год собаки - 戌';
  } else if (inputYearOfBirth % 12 == 3) {
    NameOfChineseCalendar = 'Это год свиньи - 亥';
  } else if (inputYearOfBirth % 12 == 4) {
      NameOfChineseCalendar = 'Это год крысы - 子';
  } else if (inputYearOfBirth % 12 == 5) {
    NameOfChineseCalendar = 'Это год быка - 丑';
  } else if (inputYearOfBirth % 12 == 6) {
    NameOfChineseCalendar = 'Это год тигра - 寅';
  } else if (inputYearOfBirth % 12 == 7) {
    NameOfChineseCalendar = 'Это год кролика - 卯';
  } else if (inputYearOfBirth % 12 == 8) {
    NameOfChineseCalendar = 'Это год дракона - 辰';
  } else if (inputYearOfBirth % 12 == 9) {
    NameOfChineseCalendar = 'Это год змеи - 巳';
  } else if (inputYearOfBirth % 12 == 10) {
    NameOfChineseCalendar = 'Это год лошади - 午';
  } else if (inputYearOfBirth % 12 == 11) {
    NameOfChineseCalendar = 'Это год козы - 未';
  }

  document.querySelector('.output-сhinese-calendar').innerHTML = NameOfChineseCalendar;
};