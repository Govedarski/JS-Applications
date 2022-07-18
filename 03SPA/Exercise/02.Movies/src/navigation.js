import {elements} from './sections.js';

const welcomeMSG = document.getElementById('welcome-msg');

export function showNavbar() {
    let user = sessionStorage.getItem('user');

    if (user) {
        user = JSON.parse(user);
        welcomeMSG.textContent = `Welcome, ${user.email}`;
        return toggleElements(elements, 'user', 'guest')
    }

    return toggleElements(elements, 'guest', 'user')
}

export function toggleElements(elements, show, hide) {
    elements.forEach(a => {
        if (a.classList.contains(show)) {
            console.log('show');
            a.removeAttribute('hidden');
        } else if (a.classList.contains(hide)) {
            a.setAttribute('hidden', true);
        }
    });
}