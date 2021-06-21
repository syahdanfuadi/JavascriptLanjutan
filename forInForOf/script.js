// FOR...OF
// 1. Array
// const mhs = ['Syahdan', 'Fuadi', 'Aulia', 'Rudi'];

// mhs.forEach(m => console.log(m));

// for (const m of mhs) {
//     console.log(m);
// }

// 2. String
// const nama = 'Syahdan';
// for (const n of nama) {
//     console.log(n);
// }


// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// });


// for (const m of mhs.entries()) {
//     console.log(m);
// }

// 3. NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));
// for (n of liNama) {
//     console.log(n.innerHTML);
// } 

// 4. Arguments
// function jumlahkanAngka() {
//     // console.log(arguments);
//     let jumlah = 0;
//     for (a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// FOR...IN
// const mhs = {
//     nama: 'Syahdan Faudi',
//     umur: 18,
//     email: 'syahdanfuadi@gmail.com'
// }

// for (m in mhs) {
//     console.log(mhs[m]);
// }

