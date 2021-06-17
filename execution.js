// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE



// Cretion phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// windown= global object
// this = window

// execution phase

// console.log(sayHallo());

// var nama = 'Syahdan Fuadi';
// var umur = 18;

// function sayHallo() {
//     return `Hallo, nama saya ${nama}, Saya ${umur} tahun.`;
// }


// function membuat local Execution Context
// yang di dalam nya terdapat creation dan execution phase
// window
// arguments
// hoisting


// var nama = 'Syahdan Fuadi';
// var username = '@syahdan.esef';

// function cetakURL(username){
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         function c(){
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();


function satu() {
    var nama = 'Syahdan';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('dody');
console.log(nama);