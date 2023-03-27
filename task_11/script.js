function Slider(sliderItems) {
    this.checkButtons = () => {
        const active = sliderItems.querySelector('.active');
        const prevButton = document.querySelector('.js--slider__prev');
        const nextButton = document.querySelector('.js--slider__next');

        if (active.nextElementSibling === null) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
        if (active.previousElementSibling === null) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }
    }
    this.checkButtons();
    this.next = () => {
        const active = sliderItems.querySelector('.active');
        const nextActive = active.nextElementSibling;

        if (nextActive) {
            active.classList.remove('active');
            nextActive.classList.add('active');
        }
        this.checkButtons();
    }
    this.prev = () => {
        const active = sliderItems.querySelector('.active');
        const prevActive = active.previousElementSibling;

        if (prevActive) {
            active.classList.remove('active');
            prevActive.classList.add('active'); 
        }
        this.checkButtons();
    }
}

const newSlider = new Slider(document.querySelector('.js--slider__items'));
document.querySelector('.js--slider__next').addEventListener('click', newSlider.next)
document.querySelector('.js--slider__prev').addEventListener('click', newSlider.prev)