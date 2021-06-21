// destructuring
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah)
// console.log(kali)

// const [ tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi (2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a/ b
//     }
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);


// Destructuring Function Arguments
const mhs1 = {
    nama: 'Syahdan Fuadi',
    umur: 18,
    email: 'syahdanfuadi@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 86
    }
}

// function cetakMhs(nama,umur) {
//     return `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));


function cetakMhs({ nama, umur, nilai }) {
    return `Halo, nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya adalah: ${nilai.uas}.`;
}
console.log(cetakMhs(mhs1));