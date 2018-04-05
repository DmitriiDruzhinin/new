
let age = document.getElementById('age'),
	name = "John",
	surname = "Snow";

function showUser(surname, name) {
        
         alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
};

showUser(surname, name);