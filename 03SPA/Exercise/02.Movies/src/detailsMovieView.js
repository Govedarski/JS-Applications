import {
    container,
    deleteBtn,
    descriptionField, editBtn,
    imageField, likeBtn, likesField,
    pageContainer,
    sections,
    showSection,
    titleField
} from './sections.js';
import {request} from '../utils/request.js';
import {BASE_URL} from '../utils/url.js';
import {getFirstId} from '../utils/helpers.js';
import {showMovieDetails} from '../renders/renderMovieDetails.js';
import {toggleElements} from './navigation.js';
import {dislike, like} from './likeMovie.js';

sections.homePageSection.addEventListener('click', loadDetails);

async function loadDetails(e) {
    if (e.target.textContent !== 'Details') return;
    try {
        loading();
        const movieId = getFirstId(e.target);
        const userId = JSON.parse(sessionStorage.getItem('user'))._id
        const [movieData, likes, isLiked] = await Promise.all([
            request(BASE_URL + 'data/movies/' + movieId),
            request(BASE_URL + `data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`),
            request(BASE_URL + `data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`),
        ]);
        console.log(isLiked)
        console.log('hide');

        const user = movieData._ownerId === JSON.parse(sessionStorage.getItem('user'))._id
            ? toggleElements([deleteBtn, editBtn, likeBtn], 'creator', 'visitor')
            : toggleElements([deleteBtn, editBtn, likeBtn], 'visitor', 'creator');

        if(isLiked.length){
            likeBtn.textContent = 'Dislike'
            likeBtn.addEventListener('click',dislike)
            likeBtn.removeEventListener('click',like)
        }else{
            likeBtn.textContent = 'Like'
            likeBtn.addEventListener('click',like)
            likeBtn.removeEventListener('click',dislike)
        }

        showMovieDetails(movieData, likes);

    } catch (error) {
        alert(error);
    }

}

function loading() {
    container.id = '';
    titleField.textContent = 'Loading...';
    imageField.alt = 'Loading...';
    imageField.src = '';
    descriptionField.textContent = 'Loading...';
    likesField.textContent = 'Likes: loading...';
    deleteBtn.setAttribute('hidden',true)
    editBtn.setAttribute('hidden',true)
    likeBtn.setAttribute('hidden',true)
}