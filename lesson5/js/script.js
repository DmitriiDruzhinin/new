let hype = document.getElementsByClassName('adv'),
	ulLi = document.getElementsByClassName('menu-item'),
	menu = document.getElementsByClassName('menu')[0],
	title = document.getElementsByClassName('title'),
	column = document.getElementsByClassName('column')[1];

document.body.style.backgroundImage = 'url(../lesson5/img/apple_true.jpg)'; // jpg

let div = document.createElement('div'); 	// new Apple
div.innerHTML = 'Мы продаем только подлинную технику Apple';	// Apple
div.classList.add("title");					// Apple
column.replaceChild(div, title[0]);			// Apple

let li = document.createElement('li'); 	// пятый пункт
li.innerHTML = 'Пятый пункт';			// пятый пункт
li.classList.add("menu-item");			// пятый пункт
menu.insertBefore(li, ulLi[4]);			// пятый пункт

menu.insertBefore(ulLi[2], ulLi[1]);	//пункт меню 2-3
column.removeChild(hype[0]); 			//реклама

//
// console.log(hype[0]);
// console.log(ulLi[2]);
// console.log(li);
// console.log(text);
// console.log(title[0]);
// console.log(div);