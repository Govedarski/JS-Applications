
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
            name: [ctx.validators.checkTitleMinLength],
            breed: [ctx.validators.checkDescriptionMinLength],
            age: [ctx.validators.checkImageUrlMinLength],
            weight: [ctx.validators.checkAddressMinLength],
            image: [ctx.validators.checkPhoneMinLength],
        });

    if (validationResult.errorsNumber > 0) return;

    await ctx.request(
        ctx.endpoints.edit,
        ctx.params.pk,
        {
            name: data.name,
            breed: data.breed,
            age: data.age,
            weight: data.weight,
            image:data.image
        },
        // ctx.notification.showNotification
    );

    ctx.page.redirect('/details/'+ctx.params.pk);
}