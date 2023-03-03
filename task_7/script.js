function sumNumbers() {
    let sum = 0;

    return (num) => {
        return sum += num;
    };
}

let result = sumNumbers();

console.log(result(3));
console.log(result(5));
console.log(result(20));