// Создать переменную currentDate,хранящую текущую дату.
// Вывести дату, которая наступит через 73 дня после текущей.

// Создаём переменную с текущей датой
let currentDate = new Date();

// Вычисляем дату через 73 дня
currentDate.setDate(currentDate.getDate() + 73);

// Выводим результат
console.log(currentDate.toISOString().split('T')); // Формат YYYY-MM-DD
