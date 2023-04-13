function Student({ name, surname, birthYear, grades }) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25);
    let index = 0;

    this.age = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
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
        return this;
    };

    this.absent = function () {
        if (index <= this.attendance.length - 1) {
            this.attendance[index] = false;
            index++;
        }
        return this;
    };

    this.summary = function () {
        const averageGrade = this.averageGrade();
        const presenceInClass = this.attendance.filter(item => {
            return item === true;
        });
        const averageVisits = presenceInClass.length / this.attendance.length;
        if ((averageGrade >= 90) && (averageVisits >= 0.9)) {
            return 'Молодец!';
        } else if ((averageGrade < 90) && (averageVisits < 0.9)) {
            return 'Редиска!';
        } else {
            return 'Хорошо, но можно лучше';
        }
    };
}

document.querySelector('.Student1').addEventListener('click', () => {
    const vasya = new Student({
        name: 'Vasily',
        surname: 'Petrov',
        birthYear: 1998,
        grades: [56, 58, 99, 81, 51, 67, 88, 53, 89, 81, 81, 77, 68, 82, 99, 57, 100, 72, 59, 92, 50, 76, 63, 59, 93],
    });
    for (let i = 0; i < 25; i++) {
        if (i < 16) {
            vasya.present();
        } else {
            vasya.absent();
        }
    }

    console.log('Age -', vasya.age());
    console.log('Average Grade -', vasya.averageGrade());
    console.log('Summary -', vasya.summary());
});

document.querySelector('.Student2').addEventListener('click', () => {
    const petro = new Student({
        name: 'Petr',
        surname: 'Ivanov',
        birthYear: 2002,
        grades: [86, 88, 100, 89, 90, 90, 87, 91, 93, 98, 92, 93, 97, 92, 89, 92, 85, 100, 91, 94, 85, 86, 89, 85, 100],
    });
    for (let i = 0; i < 25; i++) {
        if (i < 23) {
            petro.present();
        } else {
            petro.absent();
        }
    }

    console.log('Age -', petro.age());
    console.log('Average Grade -', petro.averageGrade());
    console.log('Summary -', petro.summary());
});

document.querySelector('.Student3').addEventListener('click', () => {
    const sergey = new Student({
        name: 'Sergey',
        surname: 'Gorelov',
        birthYear: 1995,
        grades: [92, 96, 87, 100, 86, 91, 99, 95, 88, 92, 88, 87, 87, 95, 85, 96, 91, 99, 86, 93, 97, 100, 92, 85, 98],
    });
    for (let i = 0; i < 25; i++) {
        if (i < 22) {
            sergey.present();
        } else {
            sergey.absent();
        }
    }
    console.log('Age -',sergey.age());
    console.log('Average Grade -', sergey.averageGrade());
    console.log('Summary -', sergey.summary());
});
