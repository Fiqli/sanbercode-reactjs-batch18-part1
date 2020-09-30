//Jawaban Soal No 1
var katapertama = "saya";
var katakedua = "senang";
var kataketiga = "belajar";
var katakeempat = "javascript"; 

var kalimat = katapertama + " " + katakedua + " " + kataketiga + " " + katakeempat.toUpperCase();

console.log(kalimat);

//Jawaban Soal No 2
var katapertama = Number("1");
var katakedua = Number("2");
var kataketiga = Number("4");
var katakeempat = Number("5");

console.log(katapertama+katakedua+kataketiga+katakeempat);

//Jawaban Soal No 3
var kalimat = 'wah javasript itu keren sekali';

var katapertama = kalimat.substring(0,3);
var katakedua = kalimat.substring(4,14);
var kataketiga = kalimat.substring(14,18);
var katakeempat = kalimat.substring(18,24);
var katakelima = kalimat.substring(24,31);

console.log('Kata Pertama : ' + katapertama);
console.log('Kata Kedua : ' + katakedua);
console.log('Kata Ketiga : ' + kataketiga);
console.log('Kata Keempat : ' + katakeempat)
console.log('Kata Kelima : ' + katakelima)

//Jawaban Soal No 4
var nilai = 75;
if (nilai>=80){
    console.log("Indeks A")
} else if (nilai>=70 && nilai<80){
    console.log("Indeks B")
} else if (nilai>=60 && nilai<70){
    console.log("Indeks C")
} else if (nilai>=50 && nilai<60){
    console.log("Indeks D")
} else if (nilai<=50){
    console.log("Indeks E")
}

console.log(nilai);

//Jawaban Soal No 5
var tanggal = 28;
var bulan = 11;
var tahun = 2002;

switch (true) {
    case 1 :
        bulan = "Januari";
        break;
    case 2 :
        bulan = "Februari";
        break;
    case 3 :
        bulan = "Maret";
        break;
    case 4 :
        bulan = "April";
        break;
    case 5 :
        bulan = "Mei";
        break;
    case 6 :
        bulan = "Juni";
        break;
    case 7 : 
        bulan = "Juli";
        break;
    case 8 :
        bulan = "Augustus";
        break;
    case 9 :
        bulan = "September";
        break;
    case 10 :
        bulan = "Oktober";
        break;
    case 11 :
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default :
        bulan = "November";
}

console.log(tanggal + " " + bulan + " " + tahun);