//---------------Soal 1---------------
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objectDaftarPeserta = {
    nama: "Asep",
    jeniskelamin: "laki-laki",
    hobi: "baca buku",
    "tahun lahir": 1992
}

//---------------Soal 2---------------
var data = [{
    "1.nama": "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000
}, {
    "2.nama": "jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000
}, {
    "3.nama": "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000
}, {
    "4.nama": "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000
}]

console.log(data["0"])

//---------------Soal 3---------------
var dataFilm = []

function namaFilm(nama, durasi, genre, tahun) {
    return dataFilm.push({ nama, durasi, genre, tahun });
}


namaFilm("Naruto", "45 Menit", "Anime", "2020")
namaFilm("Hinata", "45 Menit", "Anime", "2020")
console.log(dataFilm)

//---------------Soal 4---------------

class Animal {
    constructor(name) {
        this.name = "name";
        this.legs = 4;
        this.cold_blooded = false;
    }

    get getname() {
        return this.name;
    }
    get getlegs() {
        return this.legs;
    }
    get getcold_blooded() {
        return this.cold_blooded;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false




// Code class Ape dan class Frog di sini

class Ape {
    constructor(item) {
        this.item = item;
        // this.yell = "Auooo";
    }
    get getitem() {
        return this.item;
    }
    yell(Auooo) {
            return "Auooo";
        }
        // get getyell() {
        //     return this.yell;
}

class Frog extends Animal {
    constructor(item) {
        super();
        this.item = item;
    }
    get getitem() {
        return this.item;
    }
    jump(hophop) {
        return "hop hop";
    }
}


var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.yell())

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.jump())

// //---------------Soal 5---------------

class Clock {
    constructor({ template })


    {

        var timer;

        function render() {
            var date = new Date();

            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function() {
            clearInterval(timer);
        };

        this.start = function() {
            render();
            timer = setInterval(render, 1000);
        };

    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();