// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

// const reviewSymbol = Symbol('review');
// const ratingSymbol = Symbol('rating');
// const tagsSymbol = Symbol('tags');

// // Функция для добавления метаданных к объектам
// function addMetadata(book, metadataType, data) {
//     if (!book[metadataType]) {
//         book[metadataType] = [];
//     }
//     book[metadataType].push(data);
// }

// // Функция для извлечения метаданных из объекта
// function getMetadata(book, metadataType) {
//     return book[metadataType];
// }

// // Создание объекта книги и добавление метаданных
// let book = {
//     title: "1984",
//     author: "George Orwell",
// };

// addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
// addMetadata(book, ratingSymbol, 5);
// addMetadata(book, tagsSymbol, "dystopia");

// // Вывод метаданных для книги
// console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
// console.log(getMetadata(book, ratingSymbol)); // [5]
// console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]

// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль

// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];
// const library = {
//     [Symbol.iterator]: () => {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < books.length) {
//                     return {
//                         value: books[index++],
//                         done: false,
//                     }
//                 } else {
//                     return {
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
// }


  
//     for (const book of library) {
//         console.log(book.title, book.author);
        
//         }

// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
// массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
// Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать
// с ними.
/* <div>Element 1</div>
<div data-active="true">Element 2</div>
<div>Element 3</div>
<div data-active="true">Element 4</div> */
//напишите функцию, которая преобразует масси и фильтруект только те из них у кот есть дата актив

// const elements = document.querySelectorAll('div');
// console.log(elements);
// const arr = Array.from(elements);
// console.log(arr);
// const dataActiveElements = arr.filter(element => element.hasAttribute('data-active'));
// console.log(dataActiveElements);

// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и
// преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые
// посетил каждый студент
// 1. Map: урок => преподаватель
let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

// 2. Map: студент => Set уроков
let students = new Map();
let student = {
    name: "Vasya"
};

let studentLessons = new Set();
studentLessons.add("Математика");
studentLessons.add("Информатика");

students.set(student, studentLessons);

console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); 
console.log(`Преподаватель по Истории: ${lessons.get("История")}`);
console.log(`Уроки Ивана: ${[...students.get(student)]}`);

