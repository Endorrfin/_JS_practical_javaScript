
// *** Если у нас всего 1 кнопка и 1 функция можно применять не класическую функцию, а анонимную функцию
// *** Ананимная функция - это функция без имени, работает в команде в 1 месте. Ее нельзя вызвать еще в каком-либо месте.

document.querySelector('.push').onclick = function () {
  // *** Как получить данные из input type = text
  console.log(document.querySelector('.text-input').value ); //qwerty 


  // *** Как получить данные из input type = password
  console.log(document.querySelector('.pass-input').value );


  // *** Как получить данные из input type = range
  console.log(document.querySelector('.range-input').value );


  // *** Как получить данные из input type = date
  console.log(document.querySelector('.date-input').value );


  // *** Как получить данные из input type = color
  console.log(document.querySelector('.color-input').value );


  // *** Как получить данные из input type = checkbox
  console.log(document.querySelector('#checkbox-input').checked );
  if (document.querySelector('#checkbox-input').checked) {
    console.log('Дааааа!');
  } else {
    console.log('Нееееет!');
  }


  console.log('---------------- radio ---------------');
  // *** Как найти элемент с классом radio-input у которого установлен атрибут checked - ('.radio-input[checked="checked"]').checked
  console.log(document.querySelector('.radio-input[checked="checked"]').value );

}
