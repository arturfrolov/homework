const img = document.querySelector('.random_img');
const btn = document.querySelector('.genere_img');

function setRandomImage () {
    let randomNum = Math.floor(1 + Math.random() * (9 + 1 - 1));

    img.setAttribute('src', `images/${randomNum}.jpg`);
}

btn.addEventListener('click', setRandomImage);

setRandomImage();





function pow (num, degree) {
    if (degree === 1) {
        return num;
    }

    return num * pow(num, degree - 1);
}

console.log(pow(2, 4));