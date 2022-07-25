import {html, render} from '../../../node_modules/lit-html/lit-html.js';
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js';
import {cats} from './catSeeder.js';

const catsData = cats;
const container = document.getElementById('allCats');

const cardTemplate = (data) => html`
    <li>
        <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${data.id}">
                <h4>Status Code: ${data.statusCode}</h4>
                <p>${data.statusMessage}</p>
            </div>
        </div>
    </li>
`;


const cardListTemplate = (cardsData) => html`
    <ul>${repeat(cardsData, (data) => data.id, cardTemplate)}</ul>
`;

function start() {
    render(cardListTemplate(catsData), container);
}

start();
container.addEventListener('click',(e)=>{
    if(e.target.tagName !=='BUTTON')return
    e.target.nextElementSibling.style.display ==='block'
    ? e.target.nextElementSibling.style.display = 'none'
        : e.target.nextElementSibling.style.display = 'block'
})