// 1. Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Syahdan'));

// MENGUBAH FUNCTION EXPRESSION MENAJADI ARROW FUNCTION

// const tampilNama = (nama) => { return `Halo, ${nama}`;}
// console.log ('Syahdan Fuadi');

// implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log ('Syahdan Fuadi');

// Function map
// let mahasiswa = ['Syahdan Fuadi', 'Rudi Sucipto', 'Erik'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);


// konsep this pada arrow function
// const Mahasiswa = function () {
//     this.nama = 'Syahdan';
//     this.umur = 18;
//     this.sayHallo = function() {
//         console.log(`Halo, Nama Saya ${this.nama}, dan Saya ${this.umur} Tahun`);
//     }
// }

// const Syahdan = new Mahasiswa();


// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Syahdan';
//     this.umur = 18;
//     this.sayHallo = () => {
//         console.log(`Halo, Nama Saya ${this.nama}, dan Saya ${this.umur} Tahun`);
//     }
// }

// const Syahdan = new Mahasiswa();

//Object Literal
// const mhs1 = {
//     nama: 'Syahdan',
//     umur: 18,
//     sayHello: () => {
//         console.log(`Halo, Nama Saya ${this.nama}, dan Saya ${this.umur} Tahun`);
//     }
// }


// const Mahasiswa = function () {
//     this.nama = 'Syahdan';
//     this.umur = 18;
//     this.sayHello = function() {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }


//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const Syahdan = new Mahasiswa();



const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});




