import {
    container,
    deleteBtn,
    descriptionField,
    editBtn,
    imageField,
    likeBtn,
    likesField,
    titleField
} from '../src/sections.js';


export function showMovieDetails(movieData, likes){
    container.id = movieData._id
    titleField.textContent = movieData.title
    imageField.src = movieData.img
    imageField.alt = movieData.title +'\' picture'
    descriptionField.textContent = movieData.description
    likesField.textContent = `Likes: ${likes}`
}