const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
    arr.splice(item - 1, 1);
    return arr;
}




const array1 = [2, 'a', {}, 3, 5, 'abc', 8, 13, true, 54, '$#', 91, 'rit'];

function calcArefmeticMean(arr) {
    let newArr = arr.filter(element => {
        if (typeof(element) === 'number') {
            return element;
        }
    });
    
    let arfmMean = newArr.reduce((sum, nextvalue, index, array) => {
        sum += nextvalue;
        if (index === array.length - 1) {
            return sum / array.length;
        } else {
            return sum;
        }
    });

    return arfmMean;
}






let userString = prompt('Введите любую строку.');
let delElement = prompt('Введите символы, через запятую и пробел, которые хотите удалить из этой строки.');

function deleteCharacters(str, elemToRemove) {
    let elemToArr = elemToRemove.split(', ');

    if (str.length === 0) {
        return '';
    }

    if (elemToArr.indexOf(str[0]) !== -1) {
        return deleteCharacters(str.slice(1), elemToRemove);
    }

    return str[0] + deleteCharacters(str.slice(1), elemToRemove);

}



console.log(removeElement(array, 4));
console.log(calcArefmeticMean(array1));
console.log(deleteCharacters(userString, delElement));
