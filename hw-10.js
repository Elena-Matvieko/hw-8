function formatDateFull(date) { 
  if (isNaN(date.getTime())) { 
    return 'Ошибка: передана некорректная дата.'; 
  }
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  let day = date.getDate();
  let monthName = months[date.getMonth()];
  let year = date.getFullYear(); 
  let dayName = daysOfWeek[date.getDay()];
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');
  return 'Дата: ' + day + ' ' + monthName + ' ' + year + ' — это ' + dayName + '.\nВремя: ' + hours + ':' + minutes + ':' + seconds;
 } 
 // Выводим результат на страницу, заменяя \n на <br>
  document.body.innerHTML = '<pre>' + formatDateFull(new Date()) + '</pre>';