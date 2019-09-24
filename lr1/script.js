/* Task 1. Дан временной период в 100 дней. Дано количество прошедших дней. 
Вывести в консоль количество оставшихся дней в правильном падеже. 
Например, если прошло 95 дней, то должно быть выведено «Осталось 5 дней».
*/
function daysLeft(days){
	let daysleft = 100 - days;
	if (daysleft % 10 === 1) {
		console.log(`Осталось ${daysleft} день`);
	} else if (daysleft % 10 === 2 || daysleft % 10 === 3 || daysleft % 10 === 4) {
		console.log(`Осталось ${daysleft} дня`);
	} else {
		console.log(`Осталось ${daysleft} дней`);
	}
}
daysLeft(10);

// Task 2. Вывести таблицу умножения.
function renderMultiplicationTable(number){ 
const base = Array.from({length: number}, (_, index) => index);
let line = ``;
for(let i = 1; i < base.length + 1; i++) {
  for(let j = 1; j < base.length + 1; j++) {
    line += `${i * j} `;
  } 
  line += `\r\n`;
}
console.log(line);
}
renderMultiplicationTable(9);


/* Task 3. Написать скрипт, который запрашивает имя. Просит подтвердить правильность ввода. 
Если пользователь не подтверждает(жмет отмена) – опять запрашивает имя, если пользователь 
подтверждает(жмет да) – здоровается с ним.
*/
function checkName(){
	let name = '', check = false;
	do {
  		name = prompt('What is your name?', '');
  		check = confirm(`You name is ${name}?`);
	} while (!check);
	alert(`Hi, ${name}`);
}
checkName();
