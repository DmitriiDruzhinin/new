
let age = document.getElementById('age'),
	name = "John",
	surname = "Snow";

function showUser(surname, name) {
        this.value = age.value;
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
};

showUser(surname, name);