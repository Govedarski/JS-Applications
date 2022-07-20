import { showHome } from './pages/home.js';
import { showAbout } from './pages/about.js';

import { showRegister } from './pages/authentication/register.js';
import { showLogin } from './pages/authentication/login.js';
import {onLogout} from './pages/authentication/logout.js';

import { showCatalog } from './pages/movies/catalog.js';
import { showCreate } from './pages/movies/create.js';
import {showEdit} from './pages/movies/edit.js';
import {onDelete} from './pages/movies/delete.js';

import { checkUserNav } from './util.js';
import { render } from './dom.js';
import * as request from './api.js';


document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHome,
    'aboutBtn': showAbout,
    'registerBtn': showRegister,
    'loginBtn': showLogin,
    'logoutBtn': onLogout,
    'catalogBtn': showCatalog,
    'createBtn': showCreate,
    'editBtn': showEdit,
    'deleteBtn': onDelete,

};


checkUserNav();

// Start application in home view
goTo('homeBtn');

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const viewName = event.target.id;
        if (goTo(viewName)) {
            event.preventDefault();
        }
    }
}

function goTo(viewName, ctx={}) {
    const view = sections[viewName];

    if (typeof view == 'function') {
        view(Object.assign({},ctx,{
            render,
            goTo,
            checkUserNav,
            request
        }));

        return true;
    } else {
        return false;
    }
}