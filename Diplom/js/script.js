window.addEventListener('DOMContentLoaded', function() {

	let popup_btn = document.getElementById('popup-btn'),
		overlay = document.querySelector('.overlay'),
		main = document.querySelector('.main'),
		customInfo = document.querySelector('.custom-info'),
		customChar = document.querySelector('.custom-char'),
		customStyle = document.querySelector('.custom-style'),
		custom = document.querySelector('.custom');

		console.log(popup_btn);
		console.log(custom);
		console.log(overlay);
		// for (let i = 0; i < popup_btn.length; i++) { 
			popup_btn.addEventListener('click', function() {
				overlay.style.display = "none";
				main.style.display = "none";
				// this.classList.add('overlay');
				custom.style.display = 'flex';
				customInfo.style.display = 'block';
				customChar.style.display = 'block';
				customStyle.style.display = 'block';
				
				});

		// }

});