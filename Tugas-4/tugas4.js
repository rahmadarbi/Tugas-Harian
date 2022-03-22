// soal 1
console.log("Soal 1");
console.log("LOOPING PERTAMA");
var i=1;

while (i <= 20) {
  if(i%2===0){
    console.log(i+'- tanah tidak boleh melangit...')
  }
  i++;
}

console.log("LOOPING KEDUA");
var i=20;

while (i >= 1) {
  if(i%2===0){
    console.log(i+' - semua hanya titipan, tapi nggone rafatar kakean yaallah ')
  }
  i--;
}

//soal2
console.log("Soal 2");
for (ix = 1; ix <= 20; ix++) {
  if(ix%2===0){
    console.log(ix+' - Paham')
  }else if(ix%3===0){
    console.log(ix+' - I Love Coding')
  }else{
    console.log(ix+' - Woles')
  } 
}
//soal3
console.log("Soal 3");
var i=1;
var pager="";
while (i <= 7) {
  pager+="#";
  console.log(pager);
  i++;
}

//soal4
console.log("Soal 4");
var kalimat="saya sangat senang belajar javascript";
var soal4 = kalimat.split(" ");
console.log(soal4);

//soal5
console.log("Soal 5");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var soal5=daftarBuah.sort();
console.log(soal5);