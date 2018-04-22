window.addEventListener('DOMContentLoaded', function() {

//	// Modal window off

	let popup_btn = document.getElementById('popup-btn'),
		overlay = document.querySelector('.overlay'),
		main = document.querySelector('.main'),
		customInfo = document.querySelector('.custom-info'),
		customChar = document.querySelector('.custom-char'),
		customStyle = document.querySelector('.custom-style'),
		custom = document.querySelector('.custom');
	
			popup_btn.addEventListener('click', function() {
					modalWindow();
				});
		
	
//	// Creating a new candidate
		
	

		let ready = document.getElementById('ready'),
			reset = document.getElementById('reset'),
			nameId = document.getElementById('name'),
			ageId = document.getElementById('age'),
			radioId = document.getElementsByName('sex'),
			select = document.getElementById('select'),
			bioId = document.getElementById('bio'),
			personEasy = document.querySelector('.person-easy'),
			preview = document.querySelector('.preview');
		

	// name
		nameId.addEventListener('change', () => {
			let name = nameId.value;

			if (isNaN(name) && name != '' && name.length < 50) {
				candidate.nameCandidate = name;
			} else {
				// alert("Заполните ФИО"); 
			};
		});

	// age
		ageId.addEventListener('change', () => {
			let age = ageId.value;

			if (!isNaN(age) && age != '') {
				candidate.ageCandidate = age;
			} else {
				// alert("Заполните возраст");
			};
		});

	// select 
		 select.addEventListener('change', () => {

				candidate.positionCandidate = select.value;
		});	

	// bios
		bioId.addEventListener('change', () => {
			bio = bioId.value;
			
			if (bio.length < 100 && bio != '') {
				candidate.biosCandidate = bio;
			} else {
				// alert("Заполните правильно биографию");
			};
		});
	
	// gender man/woman
	
		let radioOption = [document.getElementsByName('sex')[0],document.getElementsByName('sex')[1]];
		var a = 7,
			b = 8;	
  
		radioOption.forEach(function(e) {
			e.addEventListener("click", function() {
			candidate.genderCandidate = e.value;
				if(candidate.genderCandidate == "Мужской"){
					a = 7,
					b = 8;
					preview.style.backgroundImage = "url('../Diplom/img/construct-5.png')";
					personEasy.style.backgroundImage = preview.style.backgroundImage;
					candidate.urlImg  = preview.style.backgroundImage;
				} else {
					a = 1,
					b = 6;
					preview.style.backgroundImage = "url('../Diplom/img/construct-4.png')";
					personEasy.style.backgroundImage = preview.style.backgroundImage;
					candidate.urlImg  = preview.style.backgroundImage;
				};

			});
		});

	// Slider

		let slideIndex = 1,
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next');
		

		showSlides(slideIndex);

		function showSlides(n) {

			if (n > b) {
				slideIndex = a;
			};
			if (n < a) {
				slideIndex = b;
			};

			preview.style.backgroundImage = "url('../Diplom/img/construct-" + slideIndex + ".png')";
			personEasy.style.backgroundImage = preview.style.backgroundImage;
			candidate.urlImg = preview.style.backgroundImage;

		}

		function plusSlides (n) {
			showSlides(slideIndex += n);
		};

		prev.addEventListener('click', function() {
			plusSlides(-1);
		});

		next.addEventListener('click', function() {
			plusSlides(1);					
		});


//	//	ready_btn

		ready.addEventListener('click', function () {
			myCandidate();
		});

//	//	reset_btn

		reset.addEventListener('click', function () {
			let mainCardsItem = document.getElementsByClassName('main-cards-item'),
				mainCards = document.getElementsByClassName('main-cards')[0];
			mainCards.removeChild(mainCardsItem[1]);
			modalWindow();
			resData();

		});

		function resData() {
			let nameIdRes = document.getElementById('name'),
				ageIdRes = document.getElementById('age'),
				bioIdRes = document.getElementById('bio');
			nameIdRes.value = "";
			ageIdRes.value = '';
			bioIdRes.value = "";
			candidate.nameCandidate = "";
			candidate.ageCandidate = "";
			candidate.biosCandidate = "";
		};

//	// The creation of a card of the candidate		
		function myCandidate() {
			if(candidate.nameCandidate == '') {
					alert("Заполните ФИО");
				} else if (candidate.ageCandidate == '' ) {
					alert("Заполните возраст");
				} else if (candidate.biosCandidate == '') {
					alert("Заполните Биографию");
			} else {

				// 	activation card	
						overlay.style.display = "none";
						main.style.display = "block";
						custom.style.display = 'none';
						customInfo.style.display = 'none';
						customChar.style.display = 'none';
						customStyle.style.display = 'none';

				let mainCardsItem = document.getElementsByClassName('main-cards-item'),		// new card
					mainCards = document.getElementsByClassName('main-cards')[0],
					div = document.createElement('div');
					div.classList.add("main-cards-item");					
					mainCards.insertBefore(div, mainCardsItem[1]);

				let divBlock = document.createElement('div');								// new div class="candidate-block"
					divBlock.classList.add("candidate-block");
					mainCardsItem[1].appendChild(divBlock);

				let divPhoto = document.createElement('div');								// new div class="photo photo-1"
					divPhoto.classList.add("photo");
					divPhoto.style.backgroundSize = "contain";
					divPhoto.style.backgroundImage = candidate.urlImg;
					// divPhoto.style.backgroundPosition = "center";
					divPhoto.style.backgroundRepeat = "no-repeat";
					divBlock.appendChild(divPhoto);

				let divResult = document.createElement('div');								// new div class="result"
					divResult.classList.add("result");
					divBlock.appendChild(divResult);

				let divResultCount = document.createElement('div');							// new div class="result-count"
					divResultCount.innerHTML = '0 %';
					divResultCount.classList.add("result-count");
					divResult.appendChild(divResultCount);

				let divResultProgress = document.createElement('div');						// new div class="progress"
					divResultProgress.classList.add("progress");
					divResult.appendChild(divResultProgress);
				
				let divResultProgressBar = document.createElement('div');					// new div class="progress-bar"
					divResultProgressBar.classList.add("progress-bar");
					divResultProgress.appendChild(divResultProgressBar);

				let divName = document.createElement('div');								// new div class="name"
					divName.textContent =  candidate.nameCandidate;
					divName.classList.add("name");
					mainCardsItem[1].appendChild(divName);

				let divAge = document.createElement('div');									// new div class="age"
					divAge.textContent =  candidate.ageCandidate + " лет";
					divAge.classList.add("age");
					mainCardsItem[1].appendChild(divAge);

				let divSexName = document.createElement('div');								// new div name_sex
					divSexName.textContent = "Пол:";
					mainCardsItem[1].appendChild(divSexName);
				
				let divSex = document.createElement('div');									// new div class="sex"
					divSex.textContent =  candidate.genderCandidate;
					divSex.classList.add("sex");
					mainCardsItem[1].appendChild(divSex);
					
				let divViewsName = document.createElement('div');							// new div name_views
					divViewsName.textContent = "Полит. взгляды:";
					mainCardsItem[1].appendChild(divViewsName);
				
				let divViews = document.createElement('div');								// new div class="views"
					divViews.textContent =  candidate.positionCandidate;
					divViews.classList.add("views");
					mainCardsItem[1].appendChild(divViews);

				let divBioName = document.createElement('div');								// new div name_bio
					divBioName.textContent = "Биография";
					mainCardsItem[1].appendChild(divBioName);
				
				let divBio = document.createElement('div');									// new div class="bio"
					divBio.textContent =  candidate.biosCandidate;
					divBio.classList.add("bio");
					mainCardsItem[1].appendChild(divBio);
			
					let resultCount = document.getElementsByClassName('result-count'),		// result = 0 %
						progressBar = document.getElementsByClassName('progress-bar');
						resultCount[0].innerHTML = '0 %';
						resultCount[2].innerHTML = '0 %';
						progressBar[0].style.height = 'initial';
						progressBar[2].style.height = 'initial';
					
			};
		};
//	// Modal window 
		function modalWindow() {
			overlay.style.display = "none";
			main.style.display = "none";
			custom.style.display = 'flex';
			customInfo.style.display = 'block';
			customChar.style.display = 'block';
			customStyle.style.display = 'block';
		};
});


//	// Сandidate's personal data

	var candidate = {
		nameCandidate: '',
		ageCandidate: '',
		genderCandidate: "Мужской",
		positionCandidate: 'Либеральные',
		biosCandidate: '',
		urlImg: ''
	};