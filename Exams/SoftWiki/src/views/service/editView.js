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
            title: [ctx.validators.checkIsFilled],
            category: [
                ctx.validators.checkIsFilled,
                ctx.validators.checkCategory],
            content: [ctx.validators.checkIsFilled],
        });

    if (validationResult.errorsNumber > 0) return;

    await ctx.request(
        ctx.endpoints.edit,
        ctx.params.pk,
        {
            title: data.title,
            category: data.category,
            content: data.content,
        },
    );

    ctx.page.redirect('/details/'+ctx.params.pk);
}