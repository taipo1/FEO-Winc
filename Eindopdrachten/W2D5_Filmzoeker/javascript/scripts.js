const movieList = document.getElementById('movie-list');
const radioArray = document.getElementById('filter-navigation').getElementsByTagName('input');
let filteredmovies = movies;

// Movie card generator
// adds movie to list in form of LI 
const addMovieToResults = movie =>{
    let newMovie = document.createElement('li');
    movieList.appendChild(newMovie);
    addBackground(movie, newMovie);
    generateHTML(movie, newMovie);
};
// function add background id to item
const addBackground = (selectedMovie, movieLi) =>{
    movieLi.setAttribute('id', selectedMovie.imdbID);
};
// Generate the HTML for movie
const generateHTML = ((selectedMovie, movie) => {
    const htmlContainer = generateChildElement(movie, 'div' ,'movie-hover', '');
    generateChildElement(htmlContainer, 'h3', '', `${selectedMovie.Title}` );
    generateChildElement(htmlContainer, 'h4' ,'', `${selectedMovie.Year}`);
    const link = generateChildElement(htmlContainer, 'a', 'button','IMDb');
    link.href= `https://imdb.com/title/${selectedMovie.imdbID}`;
});
// Generate any child element you want >> https://bit.ly/3cy9z3n <<
const generateChildElement = ((parent, element, selector , innerHTML) =>{
    const container = document.createElement(element);
    container.className = selector;
    parent.appendChild(container);
    container.innerText = innerHTML;
    return container;
});
// filter function
// Search database for movies based on filter
const removeMovieList = () => {
    let child = movieList.getElementsByTagName('li')[0];
    Array.from(movieList.getElementsByTagName('li')).forEach(li => {        
        movieList.removeChild(li);
    });
};
const filterCategorie = (filter) => {
    filteredmovies = [];
    if(filter === 'ALLE'){
        filteredmovies = movies;
    }else if (Number.isInteger(parseInt(filter)) === true){
        filterOnYear(filter);
    } else {
        filterOnName(filter);
    }
};
const filterOnName = (filter)=> {
    movies.forEach(movie => {
        if (movie.Title.toUpperCase().includes(filter, 0) === true){
            filteredmovies.push(movie);
        }
    });
};
const filterOnYear = (filter)=>{
    movies.forEach(movie =>{
        if(parseInt(movie.Year) >= filter){
            filteredmovies.push(movie);
        }
    });
};
// functionallity
// radio event listener
Array.from(radioArray).forEach((radio) => {
    radio.addEventListener('change', event =>{
        const radioValue = radio.id.toUpperCase()
        filterCategorie(radioValue);
        removeMovieList();
        showCollection();
        giveActiveState(radio.id);
    });
});
// for each movie add movie to UL
const showCollection = () => {
    filteredmovies.forEach(movie =>{
        addMovieToResults(movie);
    });
};
// button active state
const giveActiveState = (radioParameter) =>{
    const currentActive = document.getElementsByClassName("active");
    currentActive[0].className =currentActive[0].className.replace("active", '');
    document.getElementById("label-"+ radioParameter).classList.add('active');
};
// Search input
const searchBar = document.getElementById('search-bar');
searchBar.onsubmit = () =>{
    const value = document.getElementById('search').value.toUpperCase();
    filterCategorie(value);
    removeMovieList();
    showCollection();
    return false;
};
/* on load show full collection*/ showCollection();
