import {request} from '../utils/request.js';
import {sections, showSection} from './sections.js';
import {getUserToken} from '../utils/helpers.js';
import {BASE_URL} from '../utils/url.js';


document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.textContent !== 'Logout') return;
    e.preventDefault();
    logout();
});

function logout() {


    request(
        BASE_URL +'users/logout',
        'get',
        {},
        {'X-Authorization': getUserToken()});
    sessionStorage.removeItem('user');
    showSection(sections.loginSection);
}