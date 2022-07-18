import {sections, showSection} from './sections.js';
import './registerView.js';
import './loginView.js';
import './logout.js';
import './homeView.js';
import './addMovieView.js';
import {loadMovies} from './homeView.js';
import './detailsMovieView.js';
import './deleteMovie.js';
import './editMovieView.js';
import './likeMovie.js';


showSection(sections.homePageSection)
loadMovies()

const navigation = {
    'Login':sections.loginSection,
    'Register':sections.registerSection,
    'Movies':sections.homePageSection,
    'Add Movie':sections.addMovieSection,
    'Details':sections.detailMovieSection,
    'Edit':sections.editMovieSection,
}

window.addEventListener('click', (e)=>{
    if(e.target.tagName === "A" && e.target.textContent in navigation){
        e.preventDefault()
        showSection(navigation[e.target.textContent])
        console.log('show');
    }
},true)