export async function editView(ctx) {
    const data = await ctx.request(ctx.endpoints.showDetails, ctx.params.pk)
    const template = ctx.templates.editTemplate(ctx, data, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault()
    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            title: [ctx.validators.checkTitleMinLength],
            description: [ctx.validators.checkDescriptionMinLength],
            imageUrl: [ctx.validators.checkImageUrlMinLength],
        },false);

    if (validationResult.errorsNumber > 0) return ctx.notification.showNotification(ctx.notification.messages.required);

    await ctx.request(ctx.endpoints.edit, ctx.params.pk,
        {
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl
        },
        ctx.notification.showNotification);

    ctx.page.redirect('/all');
}