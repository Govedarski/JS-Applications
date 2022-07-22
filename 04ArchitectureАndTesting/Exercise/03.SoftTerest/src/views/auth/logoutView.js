import {checkUserNav} from '../navigationView.js';

document.getElementById('logout')

export function onLogout(ctx){
    ctx.request.get('/users/logout')
    localStorage.removeItem('userData')
    checkUserNav()
    ctx.goTo('home')
}