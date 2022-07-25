import {html} from '../../../node_modules/lit-html/lit-html.js';
import {classMap} from '../../../node_modules/lit-html/directives/class-map.js';


export function getUserData() {
    const userData = localStorage.getItem('userData')
    return userData && JSON.parse(userData);
}

export const rowTemplate = ([id,rowData], added) => html`
    <tr id = ${id} class=${classMap({added:added})}>
        <td>${rowData.title}</td>
        <td>${rowData.author}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    </tr>
`;