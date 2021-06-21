// rest Parameter
// function myfunc(a, ...myArgs) {
//     // return myArgs;
//     return [...arguments];
// }

// console.log(myfunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for(const a of angka){
//     //     total += a;
//     // }
//     // return total;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Syahdan', 'Fuadi', 'Dodi', 'Fikri'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(wakil);


// Object Destructuring
// const team = {
//     pm: 'Syahdan',
//     forntEnd1: 'Fuadi',
//     forntEnd2: 'Fikri',
//     backEnd: 'Fajar',
//     ux: 'Rudi',
//     devOps: 'Ferry'
// }

// const { pm, ...myTeam } = team;
// console.log(pm);


// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1, 2, 'Syahdan', false, 10, true, 'Doddy'));