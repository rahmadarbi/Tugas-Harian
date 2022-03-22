//soal1
console.log("Soal 1");
function halo() {
    var kata="Halo Warganet!";
    return kata;
}
console.log(halo());

//soal2
console.log("Soal 2");
function kalikan(x,y) {
    var hsl=x*y;
    return hsl;
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

//soal3
console.log("Soal 3");
function introduce(nama,umur,alamat,hobi) {
    var kalimat="Nama saya "+nama+", umur saya "+umur+" tahun, alamat saya di "+alamat+", dan saya punya hobby yaitu "+hobi+"!";
    return kalimat;
}
var nama = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
var perkenalan = introduce(nama, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"

//soal4
console.log("Soal 4");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var listarr=Object.assign({},arrayDaftarPeserta); // {0:"a", 1:"b", 2:"c"}

var result=({
  nama:listarr[0],
  jenis_kelamin:listarr[1],
  hobi:listarr[2],
  tahun_lahir:listarr[3]
})

console.log(result);

//soal5
console.log("soal 5");
var datalist=[{
        "nama": "strawberry",
        "warna": "merah",
        "ada_bijinya": "tidak",
        "harga": 9000
    }, {

        "nama": "jeruk",
        "warna": "oranye",
        "ada_bijinya": "ada",
        "harga": 8000
    },
    {
        "nama": "Semangka",
        "warna": "Hijau & Merah",
        "ada_bijinya": "ada",
        "harga": 10000

    },
    {
        "nama": "Pisang",
        "warna": "Kuning",
        "ada_bijinya": "tidak",
        "harga": 5000
    }];
console.log(datalist[0]);