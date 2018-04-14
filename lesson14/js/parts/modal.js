function modal() {

	let des_btn = document.getElementsByClassName('description-btn'),
		more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
	

		for (let i = 0; i < des_btn.length; i++) { 
			des_btn[i].addEventListener('click', function() {
				this.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';

			});

				close.addEventListener('click', function() {
				overlay.style.display = "none";
				des_btn[i].classList.remove('more-splash');
				document.body.style.overflow = '';

			});

	   	}	
	   
	//
		more.addEventListener('click', function() {
				this.classList.add('more-splash');
				overlay.style.display = "block";
				document.body.style.overflow = 'hidden';

			});

			close.addEventListener('click', function() {
				overlay.style.display = "none";
				more.classList.remove('more-splash');
				document.body.style.overflow = '';

			});

}

module.exports = modal;