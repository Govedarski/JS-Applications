import {render} from 'https://unpkg.com/lit-html?module';
import {homeHTML} from './html/homeHTML.js';
import {registerHTML} from './html/auth/registerHTML.js';
import {loginHTML} from './html/auth/loginHTML.js';
import {dashboardHTML} from './html/ideas/dashboardHTML.js';
import {createHTML} from './html/ideas/createHTML.js';
import {detailsHTML} from './html/ideas/detailsHTML.js';

const main = document.getElementById('main')
function r(parent, generateHTML, data, event) {
    render(generateHTML(data, event), parent);
}

const home = r.bind(null, main, homeHTML)
const register = r.bind(null, main, registerHTML)
const login = r.bind(null, main, loginHTML)
const dashboard = r.bind(null, main, dashboardHTML)
const create = r.bind(null, main, createHTML)
const details = r.bind(null, main, detailsHTML)

export {r as render, home, register, login, dashboard, create, details}