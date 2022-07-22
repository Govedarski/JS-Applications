import * as request from './api.js';
import * as render from './render.js';
import {homeView} from './views/homeView.js';
import {registerView} from './views/auth/registerView.js';
import {loginView} from './views/auth/loginView.js';
import {checkUserNav} from './views/navigationView.js';
import {onLogout} from './views/auth/logoutView.js';
import {dashboardView} from './views/ideas/dashboardView.js';
import {createView} from './views/ideas/createView.js';
import {detailsView} from './views/ideas/detailsView.js';

document.querySelector('nav').addEventListener('click', onNavigate);


const sections = {
    'home': homeView,
    'register': registerView,
    'login': loginView,
    'logout': onLogout,
    'dashboard': dashboardView,
    'create': createView,
    'details': detailsView,
    // // 'editBtn': showEdit,
    // 'deleteBtn': onDelete,

};


checkUserNav();

// Start application in home view
goTo('home');

function onNavigate(e) {
    const target = e.target.tagName === "IMG" ? e.target.parentElement : e.target
    if (target.tagName == 'A') {
        const viewName = target.id;
        if (goTo(viewName)) {
            e.preventDefault();
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