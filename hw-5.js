// Создать функцию, которая выводит в консоль случайное число от 1 до 10.
function printNum() {
    const num = Math.random() * 10 + 1;
    console.log(Math.floor(num));
}
printNum();