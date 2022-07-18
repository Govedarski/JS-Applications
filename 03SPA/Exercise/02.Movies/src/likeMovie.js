import {likeBtn, likesField} from './sections.js';
import {request} from '../utils/request.js';
import {BASE_URL} from '../utils/url.js';
import {getFirstId, getUserToken} from '../utils/helpers.js';

export async function like(e) {
    e.preventDefault();
    await request(
        BASE_URL + 'data/likes',
        'post',
        {movieId: getFirstId(e.target)},
        {'X-Authorization': getUserToken()}
    );

    likeBtn.removeEventListener('click', like);
    likeBtn.addEventListener('click', dislike);
    likeBtn.textContent = 'Dislike';
    likesField.textContent = likesField.textContent
        .split(' ')
        .map(x => {
            if (isNaN(Number(x))) {
                return x;
            }
            return Number(x) + 1;
        }).join(' ');
}

export async function dislike(e) {
    e.preventDefault();
    const movieId = getFirstId(e.target)
    const userId = JSON.parse(sessionStorage.getItem('user'))._id

    const likeInfo = await request(BASE_URL + `data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)
    await request(
        BASE_URL + 'data/likes/' + likeInfo[0]._id,
        'delete',
        {},
        {'X-Authorization': getUserToken()}
    );

    likeBtn.removeEventListener('click', dislike);
    likeBtn.addEventListener('click', like);
    likeBtn.textContent = 'Like';
    likesField.textContent = likesField.textContent
        .split(' ')
        .map(x => {
            if (isNaN(Number(x))) {
                return x;
            }
            return Number(x) - 1;
        }).join(' ');
}
