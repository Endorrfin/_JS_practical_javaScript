console.log('work');


console.log(3 + '2'); // 32 конкатенация
let a = 5;
a = 8 + a; 

console.log(a); // 13

// alert(a)


// out.innerHTML = '<b>Hi</b>'; // жирный шрифт
// out.innerText = '<i>Hi</i>'; // необрабатывает теги

// document.getElementById('out').innerHTML = 777; // 777

let p;
// p = document.getElementById('out');
p = document.querySelector('#out'); // 5555

p.innerHTML = 5555;

console.log(p); // <p id="out">5555</p>



b = "Hello";
c = "World";
console.log(b + ' ' + c);



/*
* TASK 
* Вывести в консоль возраст с помощью переменной year и текущего года.
*/

let year = 2019;
let myBithday = 1983;
let myAge = year - myBithday;

console.log(myAge); // 36


p = document.querySelector('#age');
p.innerHTML = '<i>36</i>'; // 36
