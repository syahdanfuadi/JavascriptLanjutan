// $('.search-button').on('click', function () {

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=3afa6464&s=Avengers',
//         success: results => {
//             const movies = results.Search;
//             let card = '';
//             movies.forEach(m => {
//                 cards += `<div class="col-md-4 my-5">
//                             <div class="card">
//                                 <img src="" class="card-img-top">
//                                 <div class="card-body">
//                                 <h5 class="card-title">Avengers</h5>
//                                 <h6 class="card-subtitle mb-2 text-muted">2021</h6>
//                                 <a href="#" class="btn btn-primary">Show Details</a>
//                                 </div>
//                             </div>
//                         </div>`;
//             });
//             $('.movie-container').html(cards);
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }

//     });
// })


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=3afa6464&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;

            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=3afa6464&s=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showMovieDetail(m);
                            modalBody.innerHTML = movieDetail;
                        });  
                });
            });
        });
});