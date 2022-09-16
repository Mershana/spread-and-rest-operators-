'use strict'

// Применение операторов rest и spread в JavaScript
// Функция, находящая сумму чисел

// №1⊗jsPmOsrSRA
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
let arr = [1, 67, 21, 32, 54, 51];
function func(...rest){
	let sum = 0;
	for (let elem of rest){
		sum += elem;
	}
	return sum / rest.length;
}
let result = func(...arr);
console.log(result); // 37.666666666666664

// Функция, сливающая массивы в двухмерный

