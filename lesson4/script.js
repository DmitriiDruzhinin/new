// Урок № 4
let name,
	money,
	time,
	price;

function start() {	
	money = prompt("Ваш бюджет?", '');
	
	while (isNaN(money) || money == '' || money == null){
		money = prompt("Ваш бюджет?", '');
	
	}

	// name = prompt("Название вашего магазина?");
	// while ((typeof(name)) != 'string' || name == '' || name == null ){
	
	name = prompt("Название вашего магазина?", '').toUpperCase();
	
	// }
	
	time = 21;
}
// start();

let mainList = {
	budget: money,
	nameMag: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){
		for (i=0;i<3;i++) {
			let a = prompt("Какой тип товара будем продавать?", '');

			if ((typeof(a))==='string'&& (typeof(a)) != null && a != '' && a.length < 50){
				mainList.shopGoods[i] = a;
			}
			else {
				alert ("Error! Введите тип товара");
				i--;
				} 
		}
	},
	workTime: function workTime(time){
		if (time < 0){
			console.log('Такого не может быть!');
		} else if (time > 8 && time < 20){
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24){
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}
	},
	dayBudget: function dayBudget(){
		alert("Ежедневный бюджет" + mainList.budget / 30);  // .toFixed(2)
	},
	makeDiscount: function makeDiscount(){
		if(mainList.discount == true) {
			price*=0.8;
		} 
	},
	hireEmployers: function hireEmployers(){
		for (i=1;i<4;i++) {
			let name = prompt("Имя сотрудника", '');
			mainList.employers[i] = name;		
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");

		while (!isNaN(items) || items == '' || items == null){
			items = prompt("Перечислите через запятую товары", '');
		}
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще ", ""));
		mainList.shopItems.sort();
	},
	feShopItems: function feShopItems(){
		alert("У нас вы можете купить: ");
		mainList.shopItems.forEach(function(item,i){
			alert((++i) +' ' + item + ';');
		});
	},
	fiShopItems: function fiShopItems(){
			console.log("Наш магазин включает в себя: ");
			for(let key in mainList){
				console.log( key +' ' + mainList[key]);
			}
		}


};
	// // Проверка
	mainList.chooseShopItems();		// ввод товаров
	mainList.feShopItems();			// проверка forEach
	mainList.fiShopItems();			// порокерка for in
	console.log("проверка");

console.log(mainList);