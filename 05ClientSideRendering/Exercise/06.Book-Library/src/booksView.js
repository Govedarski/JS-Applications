import {html, render} from '../../../../node_modules/lit-html/lit-html.js';
import {repeat} from '../../../../node_modules/lit-html/directives/repeat.js';
import {rowTemplate} from '../util.js';
import {loadingTemplate} from './loadingTemplate.js';


const tbodyContentTemplate = (rowsData) => html`${repeat(rowsData, rowData=>rowData.title, (x)=>rowTemplate(x))}`

export async function loadBooks() {
    const tbody = document.querySelector('tbody');
    render(loadingTemplate(),tbody)
    Array.from(tbody.querySelectorAll('tr.added')).forEach(x=>x.remove())
    const booksData = Object.entries(await fetch('http://localhost:3030/jsonstore/collections/books').then(r => r.json()));
    console.log(booksData)
    render(tbodyContentTemplate(booksData),tbody)
}