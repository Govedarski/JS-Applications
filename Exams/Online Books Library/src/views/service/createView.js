export function createView(ctx) {
    const template = ctx.templates.createTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault();

    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            title: [ctx.validators.checkIsFilled],
            description: [ctx.validators.checkIsFilled],
            imageUrl: [ctx.validators.checkIsFilled],
            type: [ctx.validators.checkIsFilled],
        });

    if (validationResult.errorsNumber > 0) return

    await ctx.request(ctx.endpoints.create,
        {
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            type: data.type,
        },
        // ctx.notification.showNotification
    );
    ctx.page.redirect('/all');
}