

// *** Работа с парными HTML элементами

document.querySelector('p').innerHTML += ' Пример span <b>Hi</b>';
document.querySelector('p').innerText += ' Пример span <b>Hi</b>';


document.querySelector('h1').outerHTML = '<h2>jjjj</h2>'; // заменяет весь элемент полностью
document.querySelector('h2').outerHTML = '<h2>jjjj</h2>';



// * element.insertAjasentHTML(position, text);
document.querySelector('div').insertAdjacentHTML('beforebegin', 2222); // перед div появился 2222
document.querySelector('div').insertAdjacentHTML("afterbegin", 333); // добавлено в div перед abra cadabra
document.querySelector('div').insertAdjacentHTML("afterend", 555); // добавлено после div 
document.querySelector('div').insertAdjacentHTML("beforeend", 444); // добавлено в div после 333abra cadabra444




// *** Работа с непарными тегами
// *** Непарные теги имеют атрибуты, ими можно манипулировать.
document.querySelector('.one span').innerHTML = 99999; // class span space span, чтоб достучаться к конкретному элементу


console.log(document.querySelector('img').alt); // cat
document.querySelector('img').alt = 'yellow cat';


console.log(document.querySelector('img').src);
document.querySelector('img').src = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-48.png'; // заменили кошку на звездочку


// Меняем название тэга title
document.querySelector('title').innerText = 'Lesson 5';



// Меняем стили к документу
console.log(document.querySelector('link').href);
document.querySelector('link').href = 'style2.css';


// ---------------------
document.querySelector('input').value = 'Go to sleep';
document.querySelector('input').type = 'date';
 


