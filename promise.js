// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=3afa6464&s=Avengers',
//     success: movies => console.log(movies)

// });

// fetch('http://www.omdbapi.com/?apikey=3afa6464&s=Avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// PROMISE
// Object yang merepresentasikan keberhasilan atau kegagalan sebuah event yang asynchronous di masa yang akan datang
// States (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji telah ditepati!');
//     } else {
//         reject('Ingkar Janji...');
//     }
// });

// janji1
//     .then (Response => console.log ('OK : ' + Response))
//     .catch (Response => console.log('NOT OK : ' + Response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati Setelah Beberapa detik!');
//         }, 3000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak Ditepati!');
//         }, 3000);
//     }
// });

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// console.log('selesai');


const film = new Promise (resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'naruto',
            sutradara: 'syahdan',
            pemain: 'dodi, erik'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Sumedang',
            temp: 26,
            konidsi: 'Mendung'
        }]);
    }, 500);
});

film.then(Response => console.log(Response));
cuaca.then(Response => console.log(Response));