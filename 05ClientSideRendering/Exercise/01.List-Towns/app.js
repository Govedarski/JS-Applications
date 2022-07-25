import {html,render} from '../../../node_modules/lit-html/lit-html.js';
import {repeat} from '../../../node_modules/lit-html/directives/repeat.js';

const root = document.getElementById('root')

const listTemplate = (names) => html`
    <ul>
        ${repeat(names, name => name, name=>html`<li>${name}</li>`)}
    </ul>`

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    const data = new FormData(e.target).get('towns').split(', ')
    e.target.reset()
    render(listTemplate(data),root)
})