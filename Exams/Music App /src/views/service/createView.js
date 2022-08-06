

export function createView(ctx) {
    const template = ctx.templates.createTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault();

    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            name: [ctx.validators.checkIsFilled],
            imgUrl: [ctx.validators.checkIsFilled],
            price: [ctx.validators.checkIsFilled],
            releaseDate: [ctx.validators.checkIsFilled],
            artist: [ctx.validators.checkIsFilled],
            genre: [ctx.validators.checkIsFilled],
            description: [ctx.validators.checkIsFilled],
        });

    if (validationResult.errorsNumber > 0) return

    await ctx.request(ctx.endpoints.create,
        {
            name: data.name,
            imgUrl: data.imgUrl,
            price: data.price,
            releaseDate: data.releaseDate,
            artist: data.artist,
            genre: data.genre,
            description: data.description,
        },
        // ctx.notification.showNotification
    );
    ctx.page.redirect('/all');
}