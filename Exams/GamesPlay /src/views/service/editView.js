
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
            category: [ctx.validators.checkDescriptionMinLength],
            maxLevel: [ctx.validators.checkImageUrlMinLength],
            imageUrl: [ctx.validators.checkAddressMinLength],
            summary: [ctx.validators.checkPhoneMinLength],
        });

    if (validationResult.errorsNumber > 0) return;

    await ctx.request(
        ctx.endpoints.edit,
        ctx.params.pk,
        {
            title: data.title,
            category: data.category,
            maxLevel: data.maxLevel,
            imageUrl: data.imageUrl,
            summary:data.summary
        },
        // ctx.notification.showNotification
    );

    ctx.page.redirect('/details/'+ctx.params.pk);
}