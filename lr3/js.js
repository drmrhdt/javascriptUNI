// TASK 1 check palindrome
function isPalindrome(word) {
	if (word) {
		let letters = word.toLowerCase().split('');
		// console.log(letters);
		if (letters[0] === letters[letters.length - 1]) {
			isPalindrome(word.slice(1, word.length - 1));
    	} else return false;
		return true;
    }
}
// TEST
//isPalindrome('amma');
//isPalindrome('ammmp');
//isPalindrome('ammma');

// TASK 2 При помощи метода sort отсортировать по убыванию массив
[0, -11, 11, 1, 12, 2, 0.1, 1.1, 22, 3, 100].sort((a,b) => b - a);

// TASK 3 Написать функцию для глубинного клонирования массивов (если массив многомерный)
let arr = [1, [2], [[3]]];
function cloneArray(clonedArray = [], array) {
	for (let item in array) {
		if (Array.isArray(array[item])) cloneArray(clonedArray, array[item]);
		else clonedArray.push(array[item]);
    }
	return clonedArray;
}
// TEST
//cloneArray(arr);
