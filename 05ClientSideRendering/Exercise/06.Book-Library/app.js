import {loadHome} from './src/homeView.js';
import {loadBooks} from './src/booksView.js';
import {loadAddForm} from './src/addView.js';
import {loadEditForm} from './src/editView.js';
import {del} from './src/deleteView.js';


loadHome();
loadAddForm();
document.getElementById('loadBooks').addEventListener('click', loadBooks)

document.body.addEventListener('click',async (e)=>{


    if(e.target.tagName ==='BUTTON' && e.target.textContent === 'Edit'){
        const data = {
            title: e.target.parentElement.parentElement.querySelector('td:nth-of-type(1)').textContent,
            author: e.target.parentElement.parentElement.querySelector('td:nth-of-type(2)').textContent,
            id: e.target.parentElement.parentElement.id
        }
        loadEditForm(data)
    }

    if(e.target.tagName ==='BUTTON' && e.target.textContent === 'Delete'){
        const data = {
            title: e.target.parentElement.parentElement.querySelector('td:nth-of-type(1)').textContent,
            author: e.target.parentElement.parentElement.querySelector('td:nth-of-type(2)').textContent,
            id: e.target.parentElement.parentElement.id
        }
        await del(data.id)
    }
})