/* Task 1. Создать массив в котором будет записана таблица умножения. 
Например, в при обращении к ячейке с индексами [5][5] мы должны получить 25.
*/
function renderMultiplicationTable(number){ 
const base = Array.from({length: number}, (_, index) => index);
let table = [];
for(let i = 0; i < base.length + 1; i++) {
  let line = [];
  table.push(line);
  for(let j = 0; j < base.length + 1; j++) {
    line.push(i * j);
  }
}
return table;
}
console.log(renderMultiplicationTable(9));
renderMultiplicationTable(9)[5][5];

/* Task 2. Запросите у пользователя строку (prompt) содержащую разделители ;. 
Далее строку нужно преобразовать в массив (с учетом разделителя). Далее каждый 
элемент массива вывести на новой строке (document.write), в массиве не должно быть пустых элементов. 
Если пользователь жмет отмена, вводит пустую строку или строку без разделителей – запросите строку заново.
*/
function promptStringAndConvertToArray() {
  let line = '';
  do {
    line = prompt('Enter a string with delimeters ";"', '');
  } while(!line);
  line.split(';').filter(el => el != '').forEach(el => console.log(el));
}
promptStringAndConvertToArray();

/* Task 3. */ 
const rus = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к",
    "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш",
    "щ", "ъ", "ы", "ь", "э", "ю", "я", "А", "Б", "В", "Г", "Д", "Е",
    "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р",
    "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];

const translit = ["a", "b", "v", "g", "d", "e", "jo", "zh", "z", "i", "j",
    "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "kh", "ts", "ch",
    "sh", "sch", "''", "y", "'", "e", "yu", "ya", "A", "B", "V", "G", "D",
    "E", "JO", "ZH", "Z", "I", "J", "K", "L", "M", "N", "O", "P", "R",
    "S", "T", "U", "F", "KH", "TS", "CH", "SH", "SCH", "''", "Y", "'", "E", "YU", "YA"];

  function rusToTranslit(text) {
    return text.split('').map(el => translit[rus.indexOf(el)] ? el = translit[rus.indexOf(el)] : el).join('');
  }

  let res = rusToTranslit('Привет, мир Строка!');
  console.log(res);


