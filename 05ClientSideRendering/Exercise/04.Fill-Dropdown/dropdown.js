import {html, render} from '../../../node_modules/lit-html/lit-html.js';
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js';


const containerSelect = document.getElementById('menu');
const optionTemplate = (data) => html`<option value="${data._id}">${data.text}</option>`;
const optionsTemplate = (data) => html`${repeat(data, d => d._id, optionTemplate)}`;


async function loadOptions() {
    const optionsData = Object.values(await fetch('http://localhost:3030/jsonstore/advanced/dropdown')
        .then(response => response.json()));
    render(optionsTemplate(optionsData), containerSelect);
}

await loadOptions();

async function addItem(e) {
    e.preventDefault();
    const text = new FormData(e.target).get('text');
    e.target.reset()

    const optionData = await fetch('http://localhost:3030/jsonstore/advanced/dropdown',
        {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text})
        })
        .then(response => response.json());

    const tempContainer = document.createDocumentFragment()
    render(optionTemplate(optionData),tempContainer)
    containerSelect.appendChild(tempContainer)
}

document.querySelector('form').addEventListener('submit', addItem);