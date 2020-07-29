var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

var waktu = 10000

function baca() {
    readBooksPromise(waktu, books[0])
        .then(function(sisaWaktu) {
            console.log(sisaWaktu)
        })
        .catch(function(error) {
            console.log(error.message)
        })

    readBooksPromise(waktu, books[1])
        .then(function(sisaWaktu) {
            console.log(sisaWaktu)
        })
        .catch(function(error) {
            console.log(error.message)
        })

    readBooksPromise(waktu, books[2])
        .then(function(sisaWaktu) {
            console.log(sisaWaktu);
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

baca()