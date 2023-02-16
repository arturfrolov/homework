function printNumbers() {
    let str = '';
    for (let i = 20; i <= 30; i = i + 0.5) {
        str += i + ' ';
    }
    return str;
}




function dollarValue() {
    const dollarRate = 27;
    let str = '';

    for (let i = 10; i <= 100; i += 10) {
        str += i * dollarRate + ' ';
    }
    return str;
}




const int = +prompt('Введите целое число!');

function integersFromOneToOneHundred(n) {
    
    if (n <= 0 || typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Ошибка, вы должны ввести целое число!';
    }
    
    let str = '';
    for (let i = 1; Math.pow(i, 2) <= n; i++) {
        if (i > 100) {
            break;
        }
        str += i + ' ';
    }
    return str;
}





function simpleNumber(n) {
    if (n <= 0 || typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Ошибка, вы должны ввести целое число!';
    } else if (n === 1) {
        return 1;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `Введенное вами число ${n} не является простым`;
        }
    }
    return n === 2 ? `Введенное вами число ${n} является простым` : `Введенное вами число ${n} является простым`;
}




function getNumberExponentiation(n) {
    const num1 = 3;

    for (let i = 1; Math.pow(num1, i) <= n; i++) {
        if (Math.pow(num1, i) === n) {
            return true;
        }
    }
    return false;
}




alert(printNumbers());
alert(dollarValue());
console.log(integersFromOneToOneHundred(int));
alert(simpleNumber(int));
alert(getNumberExponentiation(int));