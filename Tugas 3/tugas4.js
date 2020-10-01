// Jawaban Soal 1
var l=1
console.log("LOOPING PERTAMA")

while (l<21){
    l++;
    if ((l%2) == 0) {
        console.log(l + " - " + "I love coding");
    }
}

var w=21;
console.log(("LOOPING KEDUA"));

while(w>2){
    w--;
    if ((w%2) == 0){
        console.log(w + " - " + "I will become a fronted developer")
    }
}

// Jawaban Soal 2
for (var angka = 1; angka <= 20; angka++){
    if(angka % 2 == 0){
        console.log(angka + " - Berkualitas")
    }else if (angka %3==0){
        console.log(angka + " - I Love Coding")
    }else{
        console.log(angka + " - Santai")
    }
}

// Jawaban Soal 3
var x="#"
while(x.length<=6){
    console.log (x)
    x = x +"#"
}

// Jawaban Soal 4
var kalimat = "saya sangat senang belajar javascript";
var teks = kalimat.split(" ");
console.log(teks);

// Jawaban Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

for (var daftarBuah = 1; daftarBuah <= 5; daftarBuah++){
    if(daftarBuah %2==0){
        console.log(daftarBuah + " Apel")
    }else if (daftarBuah %3==0){
        console.log(daftarBuah + " Anggur")
    }else if (daftarBuah %4==0){
        console.log(daftarBuah + " Semangka")
    }else if (daftarBuah %5==0){
        console.log(daftarBuah + " Jeruk")
    }else{
        console.log(daftarBuah + " Mangga")
    }
}
