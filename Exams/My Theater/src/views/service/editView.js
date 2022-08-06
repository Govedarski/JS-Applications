
export async function editView(ctx) {
    const data = await ctx.request(ctx.endpoints.getDetails, ctx.params.pk);
    const template = ctx.templates.editTemplate(ctx, data, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            title: [ctx.validators.checkTitleMinLength],
            date: [ctx.validators.checkDescriptionMinLength],
            author: [ctx.validators.checkImageUrlMinLength],
            description: [ctx.validators.checkAddressMinLength],
            imageUrl: [ctx.validators.checkPhoneMinLength],
        });

    if (validationResult.errorsNumber > 0) return;

    await ctx.request(
        ctx.endpoints.edit,
        ctx.params.pk,
        {
            title: data.title,
            date: data.date,
            author: data.author,
            description: data.description,
            imageUrl:data.imageUrl
        },
        // ctx.notification.showNotification
    );

    ctx.page.redirect('/details/'+ctx.params.pk);
}