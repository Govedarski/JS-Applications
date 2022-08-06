import {checkIsFilled} from '../../common/validators.js';

export function loginView(ctx) {
    const template = ctx.templates.loginTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}


async function onSubmit(ctx, event) {
    event.preventDefault();
    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            email: [ctx.validators.checkIsFilled],
            password: [ctx.validators.checkIsFilled]
        });

    if (validationResult.errorsNumber > 0) {
    return
    }


    const userData = await ctx.request(ctx.endpoints.login,
        {
            email: data.email,
            password: data.password
        },
    );

    ctx.utils.setUserData(userData);
    ctx.page.redirect('/');
}