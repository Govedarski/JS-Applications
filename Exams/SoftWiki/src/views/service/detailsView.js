export async function detailsView(ctx) {
    const userData = ctx.utils.getUserData();
    const userId = userData && userData._id;

    const data = await ctx.request(ctx.endpoints.getDetails, ctx.params.pk)

    const isOwner = data._ownerId === userId;
    console.log(isOwner)
    const template = ctx.templates.detailsTemplate(
        ctx,
        data,
        userData,
        isOwner,
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
