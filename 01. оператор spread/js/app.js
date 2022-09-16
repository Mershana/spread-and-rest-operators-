'use strict'

// Оператор spread в JavaScript

/* №1⊗jsPmOsrSp
Дан массив:
let arr = [1, 2, 3, 4, 5];
Дана также функция:
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
Найдите с помощью приведенной функции сумму элементов массива. */
/* let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr)); */ //15

// Более сложные примеры
/* function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );  *///260

// Более полезное применение

/* №3⊗jsPmOsrSp
Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива. */
/* let arr = [212, 323, 35, 432, 753, 31, 86,];
let min = Math.min(...arr);
console.log(min); */ //31

