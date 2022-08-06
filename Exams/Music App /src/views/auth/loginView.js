
export function loginView(ctx) {
    const template = ctx.templates.loginTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}


async function onSubmit(ctx, event) {
    event.preventDefault();
    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            email: [ctx.validators.checkPasswordMinLength],
            password: [ctx.validators.checkEmailMinLength]
        });

    if (validationResult.errorsNumber > 0) {
        // return ctx.notification.showNotification(ctx.notification.messages.required)
    return
    }


    const userData = await ctx.request(ctx.endpoints.login,
        {
            email: data.email,
            password: data.password
        },
        // ctx.notification.showNotification
    );

    ctx.utils.setUserData(userData);
    ctx.page.redirect('/');
}