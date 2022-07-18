import {request} from '../utils/request.js';
import {BASE_URL} from '../utils/url.js';
import {showMovies} from '../renders/renderMovieListItems.js';
import {moviesList} from './sections.js';


export async function loadMovies() {
    moviesList.textContent = 'Loading...';
    moviesList.style.color = 'black'

    try {
        const moviesData = await request(BASE_URL + `data/movies`)
        if(!moviesData.length){
            moviesList.textContent = 'No movies in the database!';
        }
        showMovies(moviesData, moviesList)

    } catch (error) {
        moviesList.textContent = error
        moviesList.style.color = 'red'
    }

}