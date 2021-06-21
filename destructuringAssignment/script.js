// Destructuring Assignment
// 1. Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Syahdan'];
// const salam = perkenalan[0];
// console.log(salam);
// const [salam, satu, dua, nama] = perkenalan;

// Skiping Items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//  swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b, a];
// console.log(a);
// console.log(b);

// RETURN VALUE pada FUNCTION
// function coba() {
//     return[1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// REST PARAMETER
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//     nama: 'Syahdan',
//     umur: 18,
// }

// const { nama,umur } = mhs;
// console.log(nama);

// Assigment tanpa Object
// ({ nama,umur } = { nama: 'Syahdan',umur: 18});
// console.log(nama); 

// Assign ke Variable Baru
// const mhs = {
//     nama: 'Syahdan Fuadi',
//     umur: 18
// }

// const { nama: a, umur: b } = mhs;
// console.log(b);

// Memberikan Default Value
// const mhs = {
//     nama: 'Syahdan Fuadi',
//     umur: 18,
//     email: 'syahdanfuadi@gmail.com'
// }

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);

// Menggabungkan
// const mhs = {
//     nama: 'Syahdan Fuadi',
//     umur: 18,
//     email: 'syahdanfuadi@gmail.com'
// }

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);


// const mhs = {
//     nama: 'Syahdan Fuadi',
//     umur: 18,
//     email: 'syahdanfuadi@gmail.com'
// }

// const { nama, ...value } = mhs;
// console.log(e);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 234,
//     nama: 'Syahdan Fuadi',
//     umur: 18,
//     email: 'syahdanfuadi@gmail.com'
// }

// function getIdMhs({ id, nama }) {
//     return id;
// }
// console.log(getIdMhs(mhs));

