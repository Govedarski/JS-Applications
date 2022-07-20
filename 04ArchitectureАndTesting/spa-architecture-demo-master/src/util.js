import {get} from './api.js';


export function checkUserNav() {
    const userData = getUserData();
    if (userData != null) {
        document.getElementById('greeting').textContent = `Welcome, ${userData.email}!`;
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('userNav').style.display = 'none';
        document.getElementById('guestNav').style.display = 'inline-block';
    }
}


export function createSubmitHandler(form, callback) {
    form.addEventListener('submit', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        callback(Object.fromEntries([...formData.entries()]));
    }
}

export function getElementWithId(element) {
    if (element.id) {
        return element;
    }
    return getElementWithId(element.parentElement);
}

export function createBTN(attrs, event) {
    const button = document.createElement('a');
    for (const key of Object.keys(attrs)) {
        button[key] = attrs[key];
    }
    if (event) {
        button.addEventListener(event.type, event.callback);
    }
    return button;
}

export function checkOwnerButtons(section) {
    const userId = getUserData() && getUserData().id
    Array.from(section.querySelectorAll('.ownerOnly')).forEach(el => {
        if (el.ownerId === userId) {
            el.removeAttribute('hidden');
        } else {
            el.setAttribute('hidden', true);
        }
    });
}

export function getUserData() {
    const userData = sessionStorage.getItem('userData')
    return userData && JSON.parse(userData);
}