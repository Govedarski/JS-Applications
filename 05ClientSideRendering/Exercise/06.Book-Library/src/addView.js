import {html, render} from '../../../../node_modules/lit-html/lit-html.js';
import * as request from '../api.js';
import {rowTemplate} from '../util.js';


const addFormTemplate = () => html`
    <form id="add-form" @submit=${onSubmit}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
`;

export function loadAddForm() {
    render(addFormTemplate(), document.getElementById('form'));
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    if(title==='' || author==='')return

    e.target.reset();

    const data = await request.post('/jsonstore/collections/books',
        {title, author});
    const temp = document.createDocumentFragment();
    render(rowTemplate([data._id, data], true), temp);
    document.querySelector('tbody').appendChild(temp);
}