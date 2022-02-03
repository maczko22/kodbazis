document.getElementById('search').onsubmit = async function (event) {
    event.preventDefault();
    var searchWord = event.target.elements.search.value;
    var year = event.target.elements.year.value;

    if(!searchWord) {
        alert('Keresőmező kitőltés kötelező');
        return;
    }

    var url = `http://www.omdbapi.com/?s=${encodeURI(searchWord)}&y=${year}&apiKey=9606ae0f`

    var response = await fetch(url);
    if(!response.ok){
        alert('keresés sikereltelen')
        return;
    }

    var movieResponse = await response.json();

    if(!movieResponse.Search){
        return;
    }

    renderMovieList(movieResponse.Search);

    
}

function renderMovieList(movies){
    var movieListTemplate = '';
    for(var movie of movies){
        movieListTemplate = movieListTemplate + `
        <li>
        <div class="poster-wrap">
            <a>
                <img src="${movie.Poster}" class="movie-poster" />
            </a>
        </div>
        <p data-imdbid="${movie.imdbID}" class="single-movie-btn"
            <span class="movie-title">
                ${movie.Title}
            </span>
            <span class="movie-year">
                ${movie.Year}
            </span>
        </li>
        `
    }
    document.getElementById('movies').innerHTML = movieListTemplate;

    var movieTitles = document.querySelectorAll('.single-movie-btn');

    for(var movieTitle of movieTitles){
        movieTitle.onclick = function(event){

            var url = `http://www.omdbapi.com/?i=${event.target.parentElement.dataset.imdbid}&apiKey=9606ae0f`

            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(singleMovie){
               console.log(singleMovie);

               document.getElementById('movie-description').innerHTML = `
               <h1>${singleMovie.Title}</h1>
               <p>${singleMovie.Plot}</p>
               
               `
            })
        }
    }
}

