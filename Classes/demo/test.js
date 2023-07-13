class ImageBox {
    
    _domElement;

    constructor(parent, imageSource) {
        this._domElement = this.#createElement(parent, imageSource);
        
    }

    showHideImage() {
        let image = this._domElement.querySelector('img');
        let isVisible = image.style.display === 'block';
        image.style.display = isVisible ? 'none' : 'block'
        let button = this._domElement.querySelector('button');
        button.textContent = isVisible ? 'Show image' : 'Hide image'

    }

    #createElement(parent, imageSource) {
        let div = document.createElement('div');
        div.classList.add('box')
        let image = document.createElement('img');
        image.src = imageSource;
        image.classList.add('box-image');
        let button = document.createElement('button');
        button.textContent = 'Hide image';

        button.addEventListener('click', this.showHideImage.bind(this))
        
        div.appendChild(image);
        div.appendChild(button);

        parent.appendChild(div)
        return div;
    }

}

class Carousel {
    _imageBoxes;
    constructor(...imageBoxes){
        this._imageBoxes = imageBoxes;
    }

    showHide() {
    this._imageBoxes.forEach(x => x.showHideImage())
}

}






let main = document.getElementById('main');
let catImage = new ImageBox(main, 'https://http.cat/images/100.jpg');
let catImage2 = new ImageBox(main, 'https://http.cat/images/101.jpg');

let carousel = new Carousel(catImage, catImage2);
