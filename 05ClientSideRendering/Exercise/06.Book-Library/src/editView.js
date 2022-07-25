import {html, render} from '../../../../node_modules/lit-html/lit-html.js';
import * as request from '../api.js';
import {loadBooks} from './booksView.js';
import {loadAddForm} from './addView.js';

const editFormTemplate = (data) => html`
    <form id="edit-form" @submit=${onSubmit}>
        <input type="hidden" name="id" .value="${data.id}">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." .value=${data.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." .value=${data.author}>
        <input type="submit" value="Save">
    </form>
`;

export function loadEditForm(data) {
    render(editFormTemplate(data),document.getElementById('form'))
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    e.target.reset();
    const title = formData.get('title');
    const author = formData.get('author');
    const id = formData.get('id');

    await request.put('/jsonstore/collections/books/'+id,
        {title, author});
    await loadBooks()
    loadAddForm()
}