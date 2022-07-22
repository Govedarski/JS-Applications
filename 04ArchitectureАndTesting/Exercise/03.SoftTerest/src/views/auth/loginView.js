import {createSubmitHandler, getUserData} from '../../util.js';
import {checkUserNav} from '../navigationView.js';

export function loginView(ctx) {
    ctx.render.login()
    createSubmitHandler(document.querySelector('form'),onSubmit.bind(null, ctx))
}

async function onSubmit(ctx, {email, password}) {
    const userData = await ctx.request.post(
        '/users/login',
        {email, password}
    )
    localStorage.setItem('userData', JSON.stringify(userData))
    checkUserNav()
    ctx.goTo('home');
}
