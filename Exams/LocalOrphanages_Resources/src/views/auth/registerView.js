import {checkEmailMinLength} from '../../common/validators.js';

export function registerView(ctx) {
    const template = ctx.templates.registerTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            email: [ctx.validators.checkEmailMinLength],
            password: [ctx.validators.checkPasswordMinLength],
        });

    if (validationResult.errorsNumber > 0) return

    const userData = await ctx.request(ctx.endpoints.register,
        {
            email: data.email,
            password: data.password,
        },
        // ctx.notification.showNotification
    );

    ctx.utils.setUserData(userData);
    ctx.page.redirect('/all');
}