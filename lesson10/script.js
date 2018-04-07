class Options{
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(text, cssText){
		let div = document.createElement('div'); 	
		div.innerHTML = `${text}`;	
		div.classList.add(`${cssText}`);
		document.body.appendChild(div);
		console.log(div);
	}

}

const creationDiv = new Options();

console.log(creationDiv.newDiv('Новый Div', 'newStail'));

