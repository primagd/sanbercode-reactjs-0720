//Jawaban Soal 1
//saya Senang belajar JAVASCRIPT
var kataPertama = "saya";
var kataKedua = "Senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama, kataKedua, kataKetiga, kataKeempat.toUpperCase());

//Jawaban Soal 2
//12
var kataPertama = parseInt("1");
var kataKedua = parseInt("2");
var kataKetiga = parseInt("4");
var kataKeempat = parseInt("5");
var jmlh = kataPertama + kataKedua + kataKetiga + kataKeempat;

console.log(jmlh);

//Jawaban Soal 3
//Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

//Jawaban Soal 4
var nilai = 10;

if (nilai >= 80) {
    console.log("Indeks A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeks B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indeks C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeks D");
} else {
    console.log("Indeks E");
}

//Jawaban Soal 5
//1 Desember 2000
var tanggal = 01;
var bulan = 12;
var tahun = 2000;

switch (bulan) {
    case 1:
        { console.log(tanggal + ' Januari ' + tahun); break; }
    case 2:
        { console.log(tanggal + ' Febuari ' + tahun); break; }
    case 3:
        { console.log(tanggal + ' Maret ' + tahun); break; }
    case 4:
        { console.log(tanggal + ' April ' + tahun); break; }
    case 5:
        { console.log(tanggal + ' Mei ' + tahun); break; }
    case 6:
        { console.log(tanggal + ' Juni ' + tahun); break; }
    case 7:
        { console.log(tanggal + ' Juli ' + tahun); break; }
    case 8:
        { console.log(tanggal + ' Agustus ' + tahun); break; }
    case 9:
        { console.log(tanggal + ' September ' + tahun); break; }
    case 10:
        { console.log(tanggal + ' Oktober ' + tahun); break; }
    case 11:
        { console.log(tanggal + ' November ' + tahun); break; }
    case 12:
        { console.log(tanggal + ' Desember ' + tahun); break; }
    default:
        { console.log('Bulan yang anda masukan tidak sesuai'); }
}