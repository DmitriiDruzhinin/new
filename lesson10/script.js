class Options{
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		// console.log(height, width, bg, fontSize, textAlign);
	}

	newDiv(text){
		let div = document.createElement('div'); 	
		
		div.style.height = this.height;
		div.style.width = this.width;
		div.style.backgroundColor = this.bg;
		div.style.fontSize = this.fontSize;
		div.style.textAlign = this.textAlign;
		div.textContent= text;
		document.body.appendChild(div);

		
		console.log(div);
	}

}

const creationDiv = new Options('200px', '300px', 'red', '50pt', 'center');

console.log(creationDiv.newDiv('Новый Div'));

// div.style.display = 'inline-block';
        
        