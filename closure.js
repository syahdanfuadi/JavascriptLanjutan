// function init() {
//     let nama = 'Syahdan' ;
//     return function(nama) {
//         console.log(nama);
//     }

// }
// let panggilNama = init();
// panggilNama('Syahdan');
// panggilNama ('Fuadi');

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Syahdan');
// selamatSiang('Fuadi');


let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();


console.log(add());
console.log(add());
console.log(add());
console.log(add());