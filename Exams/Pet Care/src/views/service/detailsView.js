export async function detailsView(ctx) {
    const userData = ctx.utils.getUserData();
    const userId = userData && userData._id;

    let [data, donateNumber, hasDonate] = await Promise.all([
        ctx.request(ctx.endpoints.getDetails, ctx.params.pk),
        ctx.request(ctx.endpoints.donateNumber, ctx.params.pk),
        ctx.request(ctx.endpoints.hasDonate, ctx.params.pk, userId)
    ]);

    donateNumber *= 100
    // const data = await ctx.request(ctx.endpoints.getDetails, ctx.params.pk)

    const isOwner = data._ownerId === userId;
    const template = ctx.templates.detailsTemplate(
        ctx,
        data,
        userData,
        isOwner,
        donateNumber,
        hasDonate,
        onDelete.bind(null, ctx));

    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onDelete(ctx) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        ctx.request(ctx.endpoints.delete, ctx.params.pk);
        ctx.page.redirect('/');
    }
}
