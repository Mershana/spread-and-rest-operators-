'use strict'

// Оператор spread для строк и чисел в JavaScript
/* №1⊗jsPmOsrSSN
Не запуская код определите, что выведется в консоль: */
/* let arr = [...'12345'];
console.log(arr); */ //['1', '2', '3', '4', '5']


/* №2⊗jsPmOsrSSN
Не запуская код определите, что выведется в консоль: */
/* let arr = ['a', ...'12345'];
console.log(arr); */ //['a', '1', '2', '3', '4', '5']

/* №3⊗jsPmOsrSSN
Не запуская код определите, что выведется в консоль: */
/* let arr = [...'12345', ...'56789'];
console.log(arr); */ //['1', '2', '3', '4', '5', '5', '6', '7', '8', '9']

/* №4⊗jsPmOsrSSN
Не запуская код определите, что выведется в консоль: */
/* let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];
console.log(arr2); */ //['a', 'b', 'c', '1', '2', '3', '4', '5']

// Оператор spread и числа
/* Оператор spread не применим к числам:
let arr = [...12345]; // будет ошибка
Для решения проблемы следует преобразовывать число в строку, вот так:
let arr = [...String(12345)]; // получится массив ['1', '2', '3', '4', '5'] */

