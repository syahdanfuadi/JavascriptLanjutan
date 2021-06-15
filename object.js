// cara untuk membuat Object pada Javascript
// 1. Object Literal
// tidak efektif untuk membuat data yang banyak
// let mahasiswa1 = {
//     nama: 'Syahdan Fuadi',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Rudi Sucipto',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }
// }

// 2. function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);   
//     }
//     return mahasiswa;
// }

// let syahdan = Mahasiswa('Syahdan', 10);
// let Rudi = Mahasiswa('Rudi', 20);


// 3. Constructur Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);   
//     }
// }

// let syahdan = new Mahasiswa('Syahdan', 10);


// 4. Object.create


// Prototype

// function Mahasiswa(nama, energi) {  
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, Wilujeng Tuang!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Hallo ${this.nama}, Wilujeng ameng!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Hallo ${this.nama}, Wilujeng Kulem!`;
// }

// let syahdan = new Mahasiswa('Syahdan',10);

// versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi) {
        this.energi += porsi;
        return `Hallo ${this.nama}, Wilujeng Tuang!`;
    }

    main (jam) {
        this.energi -= jam;
        return `Hallo ${this.nama}, Wilujeng ameng!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Hallo ${this.nama}, Wilujeng Kulem!`;
    }
}

let syahdan = new Mahasiswa('Syahdan', 10);
let rudi = new Mahasiswa('Rudi', 20);  