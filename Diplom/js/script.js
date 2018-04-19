window.addEventListener('DOMContentLoaded', function() {

		// Modal window off
	let popup_btn = document.getElementById('popup-btn'),
		overlay = document.querySelector('.overlay'),
		main = document.querySelector('.main'),
		customInfo = document.querySelector('.custom-info'),
		customChar = document.querySelector('.custom-char'),
		customStyle = document.querySelector('.custom-style'),
		custom = document.querySelector('.custom');
	
			popup_btn.addEventListener('click', function() {
				overlay.style.display = "none";
				main.style.display = "none";
				custom.style.display = 'flex';
				customInfo.style.display = 'block';
				customChar.style.display = 'block';
				customStyle.style.display = 'block';
				
				});
		
});