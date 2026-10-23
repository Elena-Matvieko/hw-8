// Создать функцию, которая принимает два целых числа 
// и возвращает случайное число в этом диапазоне.

function getRandomIntInRange(a, b) {
    // 1. Определяем минимальное и максимальное значения
    const min = Math.min(a, b);
    const max = Math.max(a, b);
  
    // 2. Используем Math.ceil и Math.floor для гарантии целых границ
    const lower = Math.ceil(min);
    const upper = Math.floor(max);
  
    // 3. Генерируем случайное число
    // Math.random() возвращает [0, 1)
    // (upper - lower + 1) — это количество целых чисел в диапазоне
    // Math.floor() округляет результат вниз
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }
// Вызов в прямом порядке
console.log(getRandomIntInRange(1, 5)); 
// Возможный результат: 1, 2, 3, 4 или 5

// Вызов в обратном порядке
console.log(getRandomIntInRange(20, 10)); 
// Возможный результат: любое число от 10 до 20

// Пример с отрицательными числами
console.log(getRandomIntInRange(-3, 3)); 
// Возможный результат: любое число от -3 до 3