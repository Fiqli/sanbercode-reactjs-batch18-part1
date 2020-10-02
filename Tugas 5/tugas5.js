// Jawaban Soal 1
function hallo()
{
    return "Halo Sanbers"

}
console.log(hallo())// "Halo Sanbers"

// Jawaban Soal 2
function hasil(num1, num2){
    return num1*num2;
}

var num1 = 12;
var num2 = 4;
console.log(hasil(num1,num2));

// Jawaban Soal 3
function introduce(name, age, addres, hobby){
    return "Nama Saya"+ name +".Umur saya"+ age + " tahun, Alamat saya di "+ addres +" dan saya punya hobby yaitu "+ hobby
}

var name = "John"
var age = 30
var addres = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, addres, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

// Jawaban Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var list = {
    Nama: arrayDaftarPeserta [0],
    Jenis_Kelamin : arrayDaftarPeserta[1],
    Hobi : arrayDaftarPeserta[2],
    Tahun_Lahir : arrayDaftarPeserta[3]
};

console.log(list)

// Jawaban Soal 5
var buah = [{nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000},
            {nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000},
            {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000},
            {nama: "Pisang", warna: "kuning", "ada bijinya": "tidak", harga: 5000}]

console.log(buah[0]); 

// Jawaban Soal 6
var datafilm = []
function hiburan(nama, durasi, genre, tahun){
    datafilm.push({nama: "Doraemon", durasi: "2 jam", genre: "kartun", tahun: "2018"})
    datafilm.push({nama: "mr bean", durasi: "3 jam", genre: "movie", tahun: "2008"})
}

hiburan("nama", "durasi", "genre", "tahun");
console.log(datafilm)