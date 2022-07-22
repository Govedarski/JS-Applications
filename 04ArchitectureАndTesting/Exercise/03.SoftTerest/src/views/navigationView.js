import {getUserData} from '../util.js';

const navList = document.getElementById('navList');
const userNavElements = Array.from(document.querySelectorAll('.user'));
const guestNavElements = Array.from(document.querySelectorAll('.guest'));
userNavElements.forEach(el => el.remove());
guestNavElements.forEach(el => el.remove());


export function checkUserNav() {
    const userData = getUserData();
    const temp = document.createDocumentFragment();
    if (userData != null) {
        temp.append(...userNavElements);
        guestNavElements.forEach(el => el.remove());
    } else {
        temp.append(...guestNavElements);
        userNavElements.forEach(el => el.remove());
    }
    navList.appendChild(temp);
}