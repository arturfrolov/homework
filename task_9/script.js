// Вывод изображений
// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
// Вывести изображение из этой папки, полученное случайным образом ( Math.random)

//   Рекурсивный свод в степень
// Реализовать рекурсивную функцию, сводящую число в степень.
// Число, которое следует преподнести к степени, передается как первый аргумент в функции;
// Степень передается как второй аргумент в функцию pow (num, degree).



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

console.log(pow(2, 3));