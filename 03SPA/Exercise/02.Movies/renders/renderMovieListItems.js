import {html, render} from 'https://unpkg.com/lit-html?module';


export function showMovies(moviesData, parent) {
    const temp = document.createDocumentFragment();
    moviesData.forEach(MovieData => addMovie(MovieData, temp));
    parent.replaceChildren(temp);
}

export function addMovie(movieData, parent) {
    const temp = document.createDocumentFragment();
    render(renderMovie(movieData), temp);
    parent.appendChild(temp);
}

function renderMovie(movieData) {
    return html`
            <article class="card" id="${movieData._id}">
                <img class="" src="${movieData.img}" alt="${movieData.title}">
                <div>
                    <h2>${movieData.title}</h2>
                    <a class="btn">Details</a>
                </div>
            </article>
    `;
}