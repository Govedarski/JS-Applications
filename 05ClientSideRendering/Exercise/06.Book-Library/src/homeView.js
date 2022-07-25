import {html, render} from '../../../../node_modules/lit-html/lit-html.js';


const homePageTemplate = () => html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <div id="form">
    </div>
`;


export function loadHome() {
    render(homePageTemplate(), document.body);
}

