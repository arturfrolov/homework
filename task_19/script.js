// Вам нужно сделать конструктор сущности "Студент".
// У студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство. 
// И есть возможность получить возраст студента и его средний балл – это методы.

// Еще у всех студентов есть по массиву одинаковой длины, в нем 25 элементов, 
// сначала он не заполнен, но на 25 элементов. Это массив, в котором отмечается посещаемость, 
// всякий раз, когда мы вызываем метод .present() на очередное пустое место, 
// в массив записывается true, когда вызываем .absent() - записывается false. 
// Предусмотрите любую защиту от того, чтобы в массиве посещаемости не могло быть больше 25 записей. 
// Массив – это свойство, present и absent – методы.

// Последний метод: .summary(), проверяет среднюю оценку и среднее посещение(количество Посещений/количествоЗанятий), 
// и если средняя оценка больше 90, а среднее посещение больше 0.9, 
// то метод summary возвращает строку "Молодец!", если одно из этих значений меньше , 
// то - "Хорошо, но можно лучше", если оба ниже - "Редиска!".
// Не забудьте после того, как напишите этот конструктор, 
// создать 2-3 экземпляра (конкретных студентов) и показать использование этих методов.

function Student({ name, surname, birthYear, grades }) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;

    this.attendance = new Array(25);
    const date = new Date();
    const year = date.getFullYear();
    let index = 0;

    this.age = function () {
        return year - birthYear;
    };

    this.averageGrade = function () {
        let sum = 0;
        grades.forEach(item => {
            sum += item;
        });
        return sum / grades.length;
    };

    this.present = function () {
        if (index <= this.attendance.length - 1) {
            this.attendance[index] = true;
            index++;
        }
    };

    this.absent = function () {
        if (index <= this.attendance.length - 1) {
            this.attendance[index] = false;
            index++;
        }
    };

    this.summary = function () {
        const averageGrade = this.averageGrade();
        const numberOfVisits = this.attendance.filter(item => {
            return item === true;
        });
        const averageVisits = numberOfVisits.length / this.attendance.length;
        if ((averageGrade >= 90) && (averageVisits >= 0.9)) {
            return 'Молодец!';
        } else if ((averageGrade < 90) && (averageVisits < 0.9)) {
            return 'Редиска!';
        } else {
            return 'Хорошо, но можно лучше';
        }
    };
}

const vasya = new Student({
    name: 'Vasily',
    surname: 'Petrov',
    birthYear: 1998,
    grades: [56, 58, 99, 81, 51, 67, 88, 53, 89, 81, 81, 77, 68, 82, 99, 57, 100, 72, 59, 92, 50, 76, 63, 59, 93],
});
vasya.present();
vasya.absent();
vasya.present();
vasya.present();
vasya.present();
vasya.absent();
vasya.absent();
vasya.present();
vasya.present();
vasya.present();
vasya.absent();
vasya.present();
vasya.present();
vasya.present();
vasya.present();
vasya.present();
vasya.absent();
vasya.absent();
vasya.present();
vasya.present();
vasya.present();
vasya.absent();
vasya.absent();
vasya.present();
vasya.present();
vasya.present();

// console.log(vasya.age());
// console.log(vasya.averageGrade());
// console.log(vasya);
console.log(vasya.summary());


const arr = Array.from({length: 25}, () => Math.floor(Math.random() * 51) + 50);
console.log(arr);