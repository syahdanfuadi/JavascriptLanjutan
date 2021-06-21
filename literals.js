// // Literal atau String
// const nama = 'Syahdan Fuadi';
// const umur = 18;
// // console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ' , dan saya ' + umur + ' tahun.');

// Embedded Expressions
// console.log(`${alert('Syahdan')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Syahdan Fuadi',
    umur: 18,
    nrp: '0913303191',
    email: 'syahdanfuadi@gmail.com'
};

const el = `<div class="mhs">
    <h2> ${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
    </div>`;

    console.log(el);