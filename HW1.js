// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)


const musicCollection = {
    [Symbol.iterator]: () => {
        index = 0;
        return {
            next() {
                if (index < albums.length) {
                    return {
                        value: albums[iterator++],
                        done: false,
                    }
                } else {
                    return {
                        done: true,
                    }
                }
            }
        }
    },
    albums: [
        { title: "Secret Garden", artist: "Fionnuala", year: 1990 },
        { title: "album2", artist: "artist2", year: 2003 },
        { title: "album3", artist: "artist3", year: 2014 }
    ]


}

for (const album of musicCollection.albums) {
    console.log(`${album.title} (${album.year})`);
}