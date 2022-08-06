import {notification} from '../../common/notifications.js';

export function registerView(ctx) {
    const template = ctx.templates.registerTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            username: [ctx.validators.checkUsernameMinLength],
            email: [ctx.validators.checkPasswordMinLength],
            password: [ctx.validators.checkEmailMinLength],
            gender: [ctx.validators.checkGenderMinLength],
        }, false);

    if (validationResult.errorsNumber > 0) return ctx.notification.showNotification(ctx.notification.messages.required);

    const userData = await ctx.request(ctx.endpoints.register,
        {
            username: data.username,
            email: data.email,
            password: data.password,
            gender: data.gender
        },
        ctx.notification.showNotification);

    ctx.utils.setUserData(sessionStorage, userData);
    ctx.page.redirect('/all');
}