console.log('---------------Soal 1---------------')

let phi = 3.14

const kelilingLingkaran = (r) => {
    console.log("Hasil Keliling Lingkaran: " + phi * r * r);
}
const luasLingkaran = (r) => {
    console.log("Hasil Luas Lingkaran: " + 2 * phi * r);
}
kelilingLingkaran(10)
luasLingkaran(5)


console.log('---------------Soal 2---------------')

let kalimat = ""

const gabungKalimat = (a, b, c, d, e) => {
    let kalimat = `${a} ${b} ${c} ${d} ${e}`
    return console.log(kalimat);
}


gabungKalimat('saya', 'adalah', 'seorang', 'frontend', 'developer')

console.log('---------------Soal 3---------------')

class Book {
    constructor(name, hal, price) {
        this.name = name;
        this.totalPage = hal;
        this.price = price;
    }
    present() {
        return this.name + this.totalPage + this.price;
    }
}

class Komik extends Book {
    constructor(name, hal, price) {
        super(name, hal, price)
        this.isColorful = false;
    }
    show() {
        return this.present + this.isColorful
    }
}

buku = new Book("Filosofi Teras", 180, 95000)
console.log(buku)

comic = new Komik("Filosofi Teras", 180, 95000)
console.log(comic)