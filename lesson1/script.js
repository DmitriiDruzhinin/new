//
let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");

let mainList = {
	budget: money,
	nameMag: name,
	shopGoods: [],
	employers: {},
	open: false
}

//
if (!isNaN(money)){
	alert ("Ваш бюджет " + (money/30).toFixed(2) + " в день");
}
else {
	alert ("Вы ввели не число");
}

//
for (i=0;i<3;i++) {
	 let a = prompt("Какой тип товара будем продавать?");
	 if (isNaN(a)){
	 	mainList.shopGoods[i] = a;
	 }
	 else {
	 	alert ("Error! Введите тип товара");
	 	i--;
	 } 
}


console.log(mainList);