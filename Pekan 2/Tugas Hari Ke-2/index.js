// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini
var time = 10000;
readBooks(time, books[0], function(waktu) {
    readBooks(waktu, books[1], function(waktu) {
        readBooks(waktu, books[2], function(waktu) {
            readBooks(waktu, books[3], function(waktu) {
                return waktu;
            })
        })
    });
});