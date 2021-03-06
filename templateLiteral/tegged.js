// tegged templates
// const nama = 'Syahdan Fuadi';
// const umur = 18;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');

// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// HIGLIHT
const nama = 'Syahdan Fuadi';
const umur = 18;
const email = 'syahdanfuadi@gmail.com'

function highlight(strings, ...values) {

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');

}

const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}`;

document.body.innerHTML = str;