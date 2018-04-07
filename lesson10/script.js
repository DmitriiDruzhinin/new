class Options{
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		// console.log(height, width, bg, fontSize, textAlign);
	}

	newDiv(text, cssText){
		let div = document.createElement('div'); 	
		div.innerHTML = `${text}`;	
		div.classList.add(`${cssText}`);
		document.body.appendChild(div);
		console.log(div);
	}

}

const creationDiv = new Options(200, 300, 'fixed', 11, 'center');

console.log(creationDiv.newDiv('Новый Div', 'newStail'));

