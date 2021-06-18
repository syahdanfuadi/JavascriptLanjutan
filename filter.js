const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// for

// const newAngka= [];
// for (let i = 0; i < angka.length; i++) {
//     if( angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter ((a) => a >= 3 );
// console.log(newAngka);

// Map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// Jumlahan
// -1+ 8+ 9+ 1+ 4+ -5+ -4+ 3+ 2+ 9
// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue);
// console.log(newAngka);

// Method Chaining
// Cari Angka > 5
// Kalikan
// Jumlah
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);