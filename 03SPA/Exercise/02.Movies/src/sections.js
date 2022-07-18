import {showNavbar} from './navigation.js';

export const elements = Array.from(document.querySelectorAll('.user, .guest'));
const [homePageSection, addMovieSection, detailMovieSection, editMovieSection, loginSection, registerSection] =
    document.querySelectorAll('div.container>section')
export const moviesList = document.getElementById('movies-list');
export const sections = {
    homePageSection,
    addMovieSection,
    detailMovieSection,
    editMovieSection,
    loginSection,
    registerSection
}

export const [container, titleField, imageField, descriptionField, deleteBtn, editBtn, likeBtn, likesField] =
    sections.detailMovieSection.querySelectorAll('div.container, h1, img, p, a, span')
export const pageContainer = document.getElementById('container')

export function showSection(section){
    showNavbar()
    Object.values(sections).forEach(s=>s.remove())
    pageContainer.insertBefore(section, pageContainer.lastElementChild)
}

