function hello() {
    let name = prompt('What is your name?').trim();
    alert(`Hello, ${name}! How are you?`);
}

hello();

function showRow() {
    let row1 = prompt('Введите данные').trim();
    let row2 = prompt('Еще немного данных, пожалуйста').trim();
    let row3 = prompt('И еще разок)').trim();
    alert(row2 + ' ' + row3 + ' ' + row1);
}

showRow();



function printNumber() {
    const num = prompt('Введите пятизначное число').trim();
    alert(num.split('').join(' '));
}

printNumber();