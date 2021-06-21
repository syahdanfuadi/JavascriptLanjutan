// Callback
// Syncronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(halo);


// const mhs = [
//     {
//         "nama": "Syahdan Fuadi",
//         "nrp": "089129338",
//         "email": "syahdanfuadi@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },

//     {
//         "nama": "Rudi Sucipto",
//         "nrp": "12345656672",
//         "email": "syahdanfuadi@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },

//     {
//         "nama": "Shafwan Jamil",
//         "nrp": "323242141",
//         "email": "syahdanfuadi@gmail.com",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": 3
//     },

//     {
//         "nama": "Fikri Muhammad",
//         "nrp": "3214143345",
//         "email": "syahdanfuadi@gmail.com",
//         "jurusan": "Arsitektur",
//         "idDosenWali": 4
//     }

// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for( let i = 0; i < 10000000; i++ ) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// function getDataMahasiswa(url, succes, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 succes(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('Callback/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(mc=> console.log(m.nama));
// }, () => {

// });



// JQuery
console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    succes: () => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: () => {

    }
})
console.log('selesai');