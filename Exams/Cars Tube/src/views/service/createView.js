export function createView(ctx) {
    const template = ctx.templates.createTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault();

    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            brand: [ctx.validators.checkIsFilled],
            model: [ctx.validators.checkIsFilled],
            description: [ctx.validators.checkIsFilled],
            year: [ctx.validators.checkIsFilled, ctx.validators.checkIsPositive],
            imageUrl: [ctx.validators.checkIsFilled],
            price: [ctx.validators.checkIsFilled, ctx.validators.checkIsPositive],
        });

    if (validationResult.errorsNumber > 0) return

    await ctx.request(ctx.endpoints.create,
        {
            brand: data.brand,
            model: data.model,
            description: data.description,
            year: Number(data.year),
            imageUrl: data.imageUrl,
            price: Number(data.price),
        },
        // ctx.notification.showNotification
    );
    ctx.page.redirect('/all');
}