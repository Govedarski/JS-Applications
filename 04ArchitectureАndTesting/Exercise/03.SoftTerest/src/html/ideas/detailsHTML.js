import {html} from 'https://unpkg.com/lit-html?module';
import {getUserData} from '../../util.js';

export function detailsHTML(data, event) {
    return html`
        <div class="container home some">
            <img class="det-img" src="${data.img}"/>
            <div class=" desc">
                <h2 class="display-5">${data.title}</h2>
                <p class="infoType">Description:</p>
                <p class="idea-description">${data.description}</p>
            </div>
            ${deleteButton(data,event)}
        </div>
    `;
}

function deleteButton(data, event) {
    const userData = getUserData()

    if(userData === null || userData._id !== data._ownerId) return

    return html`
        <div class="text-center">
            <a class="btn detb" id=${data._id} @click=${event} href="">Delete</a>
        </div>
    `;
}