// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arrArr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};


let assert = require('chai').assert

describe("sum", function() {
	it("Проверяем тип данных sum = 'true'", function() {
		assert.equal(sum(6,6), true);
	});
});

describe("num", function() {
	it("Сравниваем num = 5", function() {
		assert.equal(num, 5);
	});
});

describe("each", function() {
	it("Проверяем each на соответствие ожидаемому результату", function() {
		assert.equal(each(arrArr, myFunc),  [8,7,6,5,4]);
	});
});


describe("each", function() {
	it("Проверяем тип данных each = 'function'", function() {
		assert.typeOf(each, "function");
		console.log(each(arrArr, myFunc));
	});
});

describe("each", function() {
	it("Колличество элементов each = 5", function() {
		assert.lengthOf(arrArr, 5);
	});
});

// equal	// соответствие какому то значению
// typeOf	// тип данных
// lengthOf // длина символов