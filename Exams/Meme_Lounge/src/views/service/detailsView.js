
export async function detailsView(ctx) {
    console.log('DEBUG DETAILS');
    const data = await ctx.request(ctx.endpoints.showDetails, ctx.params.pk)
    const isOwner = ctx.utils.getUserData(sessionStorage) && data._ownerId === ctx.utils.getUserData(sessionStorage)._id
    const template = ctx.templates.detailsTemplate(ctx, data, isOwner, onDelete.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onDelete(ctx) {
    alert("Item will be deleted!")
    await ctx.request(ctx.endpoints.delete, ctx.params.pk);
    ctx.page.redirect('/all');
}