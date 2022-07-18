import {moviesList, pageContainer, sections, showSection} from './sections.js';
import {validateFilled} from '../utils/validators.js';
import {request} from '../utils/request.js';
import {BASE_URL} from '../utils/url.js';
import {getUserToken} from '../utils/helpers.js';
import {addMovie} from '../renders/renderMovieListItems.js';


sections.addMovieSection.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formValues = [...formData.values()]
    try {
        validateFilled(formValues)
        const [title, description, img] = formValues
        const _createdOn = Date.now()
        const _ownerId = JSON.parse(sessionStorage.getItem('user'))._id
        const movieData = await request(
            BASE_URL + 'data/movies',
            'post',
            {title,description,img,_createdOn,_ownerId},
            {'X-Authorization':getUserToken()})
        addMovie(movieData, moviesList)
        showSection(sections.homePageSection)

    } catch (error) {
        alert(error)
    }
});