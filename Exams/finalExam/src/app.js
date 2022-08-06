import page from '../node_modules/page/page.mjs';
import {html, render} from '../node_modules/lit-html/lit-html.js';
import {repeat} from '../node_modules/lit-html/directives/repeat.js';
import {views} from './views/views.js';
import {templates} from './templates/templates.js';
import * as utils from './common/utils.js';
import {endpoints} from './data/endpoints.js';
import {request} from './data/api.js';
import * as validators from './common/validators.js';
// import {notification} from './common/notifications.js';

const navigationContainer = document.querySelector('body>div>header')
const pageContainer = document.querySelector('body>div>main')

page(contextDecorator)
page(utils.parseQueryString)
page('*', views.navigationView)
page('/', views.homeView)
page('/login', views.loginView)
page('/register', views.registerView)
page('/logout', views.logoutView)
// //
page('/all', views.listView)
page('/create', views.createView)
page('/details/:pk', views.detailsView)
page('/edit/:pk', views.editView)
page('/apply/:pk', views.applyView)
page.start()

function contextDecorator(ctx, next) {
    ctx.sections = {navigationContainer, pageContainer}
    ctx.lit = {html, render, repeat}
    ctx.templates = templates
    ctx.utils = utils
    ctx.endpoints = endpoints
    ctx.request = request.bind(null, utils.getUserData)
    ctx.validators = validators
    next()
}