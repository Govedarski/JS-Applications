import {html, render} from '../../../node_modules/lit-html/lit-html.js';
import {contacts} from './contacts.js';
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js';

const cardTemplate = (eventFunc, data) => html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${data.name}</h2>
            <button @click = ${eventFunc} class="detailsBtn">Details</button>
            <div class="details" id="${data.id}">
                <p>Phone number: ${data.phoneNumber}</p>
                <p>Email: ${data.email}</p>
            </div>
        </div>
`;

const cardContainer = document.getElementById('contacts');
start();

function start() {
    render(repeat(contacts,
        contactData => contactData.id,
        cardTemplate.bind('null', toggle)), cardContainer);
}

function toggle(e) {
    e.target.nextElementSibling.style.display !== 'block'
        ? e.target.nextElementSibling.style.display = 'block'
        : e.target.nextElementSibling.style.display = 'none';
}