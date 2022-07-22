import {createSubmitHandler} from '../../util.js';
import * as validators from '../../validators.js';
import {checkUserNav} from '../navigationView.js';

export function registerView(ctx) {
    ctx.render.register();
    createSubmitHandler(document.querySelector('form'), onSubmit.bind(null, ctx));
}

export async function onSubmit(ctx, {email, password, repeatPassword}) {
    const errors = validators.validate([
        validators.validateEmailMinLength.bind(null, email),
        validators.validatePasswordMinLength.bind(null, password),
        validators.validatePasswordMatch.bind(null, password, repeatPassword),
    ]);
    if(errors.length){
        return alert(errors.join('\n'))
    }

    const userData = await ctx.request.post(
        '/users/register',
        {email, password}
    )

    localStorage.setItem('userData', JSON.stringify(userData))
    checkUserNav()
    ctx.goTo('home')
}

