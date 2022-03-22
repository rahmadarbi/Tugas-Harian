//soal 1
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });
  
console.log("soal 1");
var kata1="saya";
var kata2="senang";
var kata3="belajar";
var kata4="javascript";

console.log(kata1+" "+kata2.capitalize()+" "+kata3+" "+kata4.toLocaleUpperCase());

//soal 2
console.log("=============================================");
console.log("soal 2");
var katax1="1";
var katax2="10";
var katax3="100";
var katax4="1000";
// var jml=;
console.log("jumlah = "+(parseInt(katax1)+parseInt(katax2)+parseInt(katax3)+parseInt(katax4)));


//soal3
console.log("=============================================");
console.log("soal 3");
var kalimat ="saya senang belajar tapi_boong";
var katapertama=kalimat.substring(0,4);
var katakedua=kalimat.substring(5,12);
var kataketiga=kalimat.substring(12,20);
var katakeempat=kalimat.substring(20,30);
console.log("kata pertama = "+katapertama);
console.log("kata katakedua = "+katakedua);
console.log("kata kataketiga = "+kataketiga);
console.log("kata katakeempat = "+katakeempat);

//soal4
console.log("=============================================");
console.log("soal 4");
var nilai=75;
if(nilai>=80)
    console.log("A");
if((nilai>=70) && (nilai<80))
    console.log("B");
if((nilai>=60) && (nilai<70))
    console.log("C");
if((nilai>=50) && (nilai<70))
    console.log("D");
if(nilai<50)
    console.log("E");

//soal5
console.log("=============================================");
console.log("soal 5");
var tanggal = 6;
var bulan = 10;
var tahun = 1998;
switch(bulan) {
    case 1:
        bulanx="Januari"
      break;
    case 2:
        bulanx="Februari"
      break;
    case 3:
        bulanx="Maret"
      break;
    case 4:
        bulanx="April"
      break;
    case 5:
        bulanx="Mei"
      break;
    case 6:
        bulanx="Juni"
      break;
    case 7:
        bulanx="Juli"
      break;
    case 8:
        bulanx="Agustus"
      break;
    case 9:
        bulanx="September"
      break;
    case 10:
        bulanx="Oktober"
      break;
    case 11:
        bulanx="November"
      break;
    case 12:
        bulanx="Desember"
      break;
    default:
        bulanx="xxx"
  }
console.log(tanggal+" "+bulanx+" "+tahun );