import {editBtn, moviesList, pageContainer, sections, showSection} from './sections.js';
import {request} from '../utils/request.js';
import {BASE_URL} from '../utils/url.js';
import {getFirstId, getUserToken} from '../utils/helpers.js';
import {validateFilled} from '../utils/validators.js';

const form = sections.editMovieSection.querySelector('form');
const [title, description, image] = form.querySelectorAll('input, textarea');
editBtn.addEventListener('click', loadMovieData);

form.addEventListener('submit', edit);


async function edit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formValues = [...formData.values()]
    const [titleValue, description, img] = formValues
    try {
        validateFilled(formValues)
        console.log(title)
        await request(
            BASE_URL + 'data/movies/' + title.id,
            'put',
            {title:titleValue, description, img},
            {'X-Authorization':getUserToken()}
        )
        const movieItem=Array.from(moviesList.children).find(x=>x.id === title.id)
        console.log(movieItem)
        movieItem.querySelector('h2').textContent = titleValue
        movieItem.querySelector('img').src= img
        showSection(sections.homePageSection)
    } catch (error) {
alert(error)
    }
}

async function loadMovieData(e) {
    e.preventDefault();
    loading();
    try {
        const movieData = await request(BASE_URL + 'data/movies/' + getFirstId(e.target));
        if (JSON.parse(sessionStorage.getItem('user'))._id !== movieData._ownerId) {
            throw Error('Access deny!');
        }
        title.value = movieData.title;
        title.id = getFirstId(e.target);
        title.removeAttribute('disabled');
        description.value = movieData.description;
        description.removeAttribute('disabled');
        image.value = movieData.img;
        image.removeAttribute('disabled');


    } catch (error) {
        alert(error);
    }
}

function loading() {
    [title, description, image].forEach(x => {
        x.setAttribute('disabled', true);
        x.value = 'Loading...';
    });
}