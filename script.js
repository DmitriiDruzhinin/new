//
	// let name;
	let money;
//	
// 
	// for (i=0;i<1;i++) {	
	// 	money = prompt("Ваш бюджет?");
				
	// 	if (!isNaN(money) && money != ''){
	// 		alert ("Ваш бюджет " + (money/30).toFixed(2) + " в день");
	// 		break;
	// 	}
	// 	else {
	// 		alert ("Error!");
	// 		i--;
	// 	}
	// }
//
// 
		
	let name = prompt("Название вашего магазина?");

	if ((typeof(name))==='number'){
		console.log ("Вариант 1!");
	}
	
	if ((typeof(name))==='string' && (typeof(name)) != null && name != '' && name.length < 50){ 
		console.log ("Вариант 2!");
 	}	
	if (!isNaN(money)){
		console.log ("Вариант 3!");
	}
	if (isNaN(money)){
		console.log ("Вариант 4!");
	}
console.log(name);
console.log(typeof(name));

//!isNaN(money)
// // 
// 	let mainList = {
// 	budget: money,
// 	nameMag: name,
// 	shopGoods: [],
// 	employers: {},
// 	open: false
// }


// // пример 1
// // for (i=0;i<3;i++) {
// // 	 let a = prompt("Какой тип товара будем продавать?");
// // 	 if ((typeof(a))==='string'&& (typeof(a)) != null && a != '' && a.length < 50){ //--Исправил
// // 	 	mainList.shopGoods[i] = a;
// // 	 }
// // 	 else {
// // 	 	alert ("Error! Введите тип товара");
// // 	 	i--;
// // 	 } 
// // }


// // пример 2
// // let j=1;
// // while (j<4) {
// // 	 let a = prompt("Какой тип товара будем продавать?");
// // 	 if ((typeof(a))==='string'&& (typeof(a)) != null && a != '' && a.length < 50){ //--Исправил
// // 	 	mainList.shopGoods[j] = a;
// // 	 	j++;
// // 	 }
// // 	 else {
// // 	 	alert ("Error! Введите тип товара");
// // 	 	j--;
// // 	 } 
// // }


// // пример 3
// let j=1;
// do{	
 	
// 	let a = prompt("Какой тип товара будем продавать?");
// 	if ((typeof(a))==='string'&& (typeof(a)) != null && a != '' && a.length < 50){ //--Исправил
// 		mainList.shopGoods[j] = a;
// 	 	j++;
// 	}
// 		else {
// 		alert ("Error! Введите тип товара");
// 		j--;
// 	} 
// }while (j<4);

// function workTime(time){
// 	if (time < 0){
// 		console.log('Такого не может быть!');
// 	} else if (time > 8 && time < 20){
// 		console.log('Время работать!');
// 		} else if (time < 24){
// 			console.log('Уже слишком поздно!');
// 			} else {
// 				console.log('В сутках только 24 часа!');
// 				}
// }
// workTime(18);

 