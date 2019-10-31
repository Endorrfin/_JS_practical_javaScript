/**
|--------------------------------------------------
  ======= <<<--- TASK #1 -  --->>>  =======
Создайте два файла css - один подключите сразу.
Во втором пропишите стили так, чтобы скрывались все изображения, фоны и блоки.
Оставался один текст, весь текст черным, выравнивание по левому краю, шрифт - serif.
Добавьте кнопку при нажатии на которую вы должны получить элемент link href - где прописан путь
к файлу css и заменить его на второй файл. Т.е. было:
// <!-- <link rel="stylesheet" href="style1.css"> -->
стало
// <!-- <link rel="stylesheet" href="style2.css"> -->
Кнопка также должна скрываться.
|--------------------------------------------------
*/


let changeStyleCss = document.querySelector('link');

document.querySelector('#btn-change-style').onclick = () => {
  changeStyleCss.href = "./css/style2.css";
  // btnChangeStyle.hidden = true;
  // location.reload();
};


/**
|--------------------------------------------------
  ======= <<<--- TASK #2 -  --->>>  =======
Создайте параграф с текстом Hello. Добавьте кнопку. При нажатии кнопки к содержимому параграфа
добавьте word.
При каждом нажатии - добавляйте слово world. т.е:
нажатие 1
Hello word
нажатие 2
Hello word word
и так далее. Сколько нажатий - столько word и добавляете.
|--------------------------------------------------
*/

let btnAddWorld = document.querySelector('#btn-add-world');
btnAddWorld.onclick = () => {
  document.querySelector('.text-add-world').innerHTML += ' world';
}

/**
|--------------------------------------------------
  ======= <<<--- TASK #3 -  --->>>  =======
Создайте параграф с текстом Hello. При нажатии кнопки между тегом p и словом Hello добавьте
любой текст.
Используйте insertAdjacentHTML.
|--------------------------------------------------
*/

document.querySelector('#btn-afterbegin').onclick = () => {
  document.querySelector('.text-afterbegin').insertAdjacentHTML('afterbegin', 'AFTERBEGIN ');
};

/**
|--------------------------------------------------
  ======= <<<--- TASK #4 -  --->>>  =======
Создайте параграф с текстом Hello. При нажатии кнопки перед тегом p добавьте любой текст.
Используйте insertAdjacentHTML.
|--------------------------------------------------
*/

document.querySelector('#btn-beforebegin').onclick = () => {
  document.querySelector('.text-beforebegin').insertAdjacentHTML('beforebegin', 'BEFOREBEGIN');
};

/**
|--------------------------------------------------
  ======= <<<--- TASK #5 -  --->>>  =======
Создайте параграф с текстом Hello. При нажатии кнопки после слова Hello и перед закрывающимся
тегом p добавьте любой текст.
Используйте insertAdjacentHTML.
|--------------------------------------------------
*/

document.querySelector('#btn-beforeend').onclick = () => {
  document.querySelector('.text-beforeend').insertAdjacentHTML("beforeend", ' BEFOREEND');
}


/**
|--------------------------------------------------
  ======= <<<--- TASK #6 -  --->>>  =======
Создайте параграф с текстом Hello. При нажатии кнопки перезатрите содержимое параграфа строкой
<b>Hi</b>.
Вставку произведите сналача с помощью innerHTML, затем с помощью innerText.
Изучите отличия вставки.
|--------------------------------------------------
*/

document.querySelector('#btn-innerHTML').onclick = () => {
  document.querySelector('.text-inner').innerHTML = '<b>Hi</b>';
}

document.querySelector('#btn-innerText').onclick = () => {
  document.querySelector('.text-inner').innerText = '<b>Hi</b>';
}

/**
 * ? А как же можно сделать эту же задачу с помощью 1 кнопки?
 */

/**
|--------------------------------------------------
  ======= <<<--- TASK #7 -  --->>>  =======
Создайте параграф с текстом Hello. При нажатии кнопки перезатрите параграф строкой <b>Hi</b>. 
Вставку произведите сналача с помощью outerHTML, затем с помощью outerText. 
Изучите отличия вставки.
|--------------------------------------------------
*/

document.querySelector('#btn-outerHTML').onclick = () => {
  document.querySelector('.text-outer').outerHTML = '<b>Hi</b>';
}

document.querySelector('#btn-outerText').onclick = () => {
  document.querySelector('.text-outer').outerText = '<b>Hi</b>';
}

/**
 * ? А как же можно сделать эту же задачу с помощью 1 кнопки?
 */