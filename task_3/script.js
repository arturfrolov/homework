function switchCase() {
    let numOrStr = prompt('input number or string');
    console.log(numOrStr);
    
    
    switch (true) {
        case (numOrStr === null):
          console.log('ви скасували');
          break;
        case (numOrStr.trim() === ''):
          console.log('Empty String');
          break;
        case (isNaN(+numOrStr)):
          console.log(' number is Ba_NaN');
          break;
        default:
          console.log('OK!');
    }
}





const yearOfBirth = prompt('Какой ваш год рождения?');
let city = prompt('В каком городе вы проживаете?');
let sports = prompt('Ваш любимый вид спорта?');


function ageCity() {
    city = city[0].toUpperCase() + city.slice(1);
    alert(`Ваш возраст: ${2023 - yearOfBirth}`);
    
    switch (city) {
        case 'Киев':
            alert('Ты живешь в столице Украины');
            break;
        case 'Вашингтон':
            alert('Ты живешь в столице США');
            break;
        case 'Лондон':
            alert('Ты живешь в столице Великобритании');
            break;
        default:
            alert(`Ты живешь в городе ${city}`);
    }
}




function yourChampion() {
    sports = sports[0].toUpperCase() + sports.slice(1);
    switch (sports) {
        case 'Бокс':
            alert('Круто! Хочешь стать Саулем Альваресом?');
            break;
        case 'Футбол':
            alert('Круто! Хочешь стать Криштиану Роналду?');
            break;
        case 'Хоккей':
            alert('Круто! Хочешь стать Майклом Джорданом?');
            break;
    }
}




function dataEnteredOrNot() {
    if (yearOfBirth === null && city === null && sports === null) {
        alert('Жаль, что Вы не захотели ввести все данные');
    } else if (yearOfBirth === null) {
        alert('Жаль, что Вы не захотели ввести свою дату рождения.');
    } else if (city === null) {
        alert('Жаль, что Вы не захотели ввести свой город');
    } else if (sports === null) {
        alert('Жаль, что Вы не захотели ввести свой любимый вид спорта');
    }
}





switchCase();
ageCity();
yourChampion();
dataEnteredOrNot();
