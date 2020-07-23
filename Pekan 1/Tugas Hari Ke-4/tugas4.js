// //---------------Soal 1---------------

var a = 0;
console.log("LOOPING PERTAMA");
while (a < 20) {
    a += 2;
    console.log(a + " - I love coding");
}

var a = 20;
console.log("LOOPING KEDUA");
while (a >= 2) {
    console.log(a + " - I will become a frontend developer");
    a -= 2;
}

// //---------------Soal 2---------------
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1 && i % 3 == 0) {
        console.log(i + ' - I Love Coding');
    } else if (i % 2 == 1) {
        console.log(i + ' - Santai');
    } else if (i % 2 == 0) {
        console.log(i + " - Berkualitas");
    }
}

// //---------------Soal 3---------------
var a = "";
for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= i; j++) {
        a += "#";
    }
    a += '\n';
}
console.log(a);

// //---------------Soal 4---------------
var kalimat = "saya sangat senang belajar javascript"
var split = kalimat.split(" ");
for (var i = 0; i < 1; i++) {
    console.log(split);
}

//---------------Soal 5---------------
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (var i = 0; i < 5; i++) {
    console.log(daftarBuah[i]);
}