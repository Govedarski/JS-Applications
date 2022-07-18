import {addEventListenersHome} from './addPost.js';
import {showHome} from './showHome.js';
import {showDetails} from './showDetails.js';

addEventListenersHome();
showHome();

document.getElementById('homeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

document.querySelector('div.topic-title').addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.tagName === 'H2') {
        target = target.parentElement;
    }
    if (target.tagName !== 'A') return;

    showDetails(target.id)
});