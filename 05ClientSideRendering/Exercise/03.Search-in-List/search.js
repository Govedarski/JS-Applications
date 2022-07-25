import {html, render} from '../../../node_modules/lit-html/lit-html.js';
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js';
import {classMap} from '../../../node_modules/lit-html/directives/class-map.js';
import {towns} from './towns.js';

let townsData = towns;
const container = document.getElementById('towns');
const resultContainer = document.getElementById('result');

const townListTemplate = (data, searchText) => html`
    <ul>
        ${repeat(data, (name) => name, (name) => html`
            <li class=${classMap({'active': name.includes(searchText)})}>${name}</li>`)}
    </ul>
`;
const resultTemplate = (number) => number === 1 ? html`1 match found` : html`${number} matches found`;

function start() {
    render(townListTemplate(townsData), container);
}

start();

function search() {
    const searchText = document.getElementById('searchText').value;
    const matches = townsData.filter(x => x.includes(searchText)).length
    render(townListTemplate(townsData, searchText), container);
    render((resultTemplate(matches)), resultContainer);
}

document.querySelector('button').addEventListener('click', search);