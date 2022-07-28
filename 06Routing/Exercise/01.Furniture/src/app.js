import page from '../node_modules/page/page.mjs';
import {html, render} from '../node_modules/lit-html/lit-html.js';
import {repeat} from '../node_modules/lit-html/directives/repeat.js';

import * as utils from './utils.js';
import {request} from './requests/api.js';
import * as validators from './validators.js';
import * as functions from './cache.js'

import {headerView} from './views/headerView.js';
import {homePageView} from './views/homePageView.js';
import {loginView} from './views/auth/loginView.js';
import {registerView} from './views/auth/registerView.js';
import {createView} from './views/furniture/createView.js';
import {detailsView} from './views/furniture/detailsView.js';
import {editView} from './views/furniture/EditView.js';
import {deleteView} from './views/furniture/deleteView.js';
import {myFurnitureView} from './views/furniture/myFurnitureView.js';

const headerSection = document.querySelector('body > header');
const mainSection = document.querySelector('body > div.container');
const basePath = window.location.pathname;


if (basePath.includes('index.html')) {
    page(basePath, '/');
}

page('*', contextDecorator, headerView);
page('/', homePageView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
page('/my-furniture', myFurnitureView);

const cache = {
    updated: false,
    data: {},
    functions,
};

page.start();

function contextDecorator(ctx, next) {
    ctx.request = request;
    ctx.html = html;
    ctx.render = render;
    ctx.litRepeat = repeat;
    ctx.cache = cache;
    ctx.utils = utils;
    ctx.validators = validators;
    ctx.redirect = page.redirect;

    ctx.main = mainSection;
    ctx.header = headerSection;
    next(ctx);
}