// 1. HTML Fragments
// const mhs = {
//     nama: 'Syahdan Fuadi',
//     umur: 18,
//     nrp: '080080920',
//     email: 'syahdanfuadi@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// document.body.innerHTML = el;

// const el = `<div class="mhs">
//     <h2>${mhs.nama}<h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;


// const mhs = [
//     {
//         nama: 'Syahdan Fuadi',
//         email: 'syahdanfuadi@gmail.com'
//     },
//     {
//         nama: 'Rudi',
//         email: 'ruday@gmail.com'
//     },
//     {
//         nama: 'erik',
//         email: 'erik@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// Donditionals
// Ternary
// const lagu = {
//     judul: 'Seperti Kisah',
//     penyanyi: 'Rizki Febiyan',
//     feat: 'IndoMusic'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// 4. HTML Fragments Bersarang

const mhs = {
    nama: 'Syahdan Fuadi',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};


function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}


const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;



document.body.innerHTML = el;