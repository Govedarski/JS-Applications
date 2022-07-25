import {html, render} from '../../../node_modules/lit-html/lit-html.js';
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js';
import {classMap} from '../../../node_modules/lit-html/directives/class-map.js';

async function solve() {
    const tbodyContainer = document.querySelector('tbody');
    const searchField = document.getElementById('searchField');

    const rowTemplate = (rowData) => html`
        <tr class=${rowData.classes ? classMap(rowData.classes) : null}>
            <td>${rowData.firstName} ${rowData.lastName}</td>
            <td>${rowData.email}</td>
            <td>${rowData.course}</td>
        </tr>`;
    const tbodyContentTemplate = (rowsData) => html`${repeat(rowsData, rowData => rowsData._id, rowTemplate)}`;

    const data = Object.values(await fetch('http://localhost:3030/jsonstore/advanced/table')
        .then(response => response.json()));

    console.log(data)
    render(tbodyContentTemplate(data), tbodyContainer);

    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchText = searchField.value.toLowerCase();
        data.forEach(obj =>
            obj.classes = {
                select: Object.values(obj)
                    .slice(0, 5)
                    .some(value => value.toLowerCase().includes(searchText)),
            });

        render(tbodyContentTemplate(data), tbodyContainer);
    }
}

solve();


