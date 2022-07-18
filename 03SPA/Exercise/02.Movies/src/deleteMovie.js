import {deleteBtn, moviesList, sections, showSection} from './sections.js';
import {request} from '../utils/request.js';
import {getFirstId, getUserToken} from '../utils/helpers.js';
import {BASE_URL} from '../utils/url.js';

deleteBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const movieId = getFirstId(e.target)

        await request(
            BASE_URL + `data/movies/` + getFirstId(e.target),
            'delete',
            {},
            {'X-authorization': getUserToken()});

        Array.from(moviesList.children).find(x=>x.id === movieId).remove()
        showSection(sections.homePageSection)
    } catch (error) {
        alert(error);
    }
});