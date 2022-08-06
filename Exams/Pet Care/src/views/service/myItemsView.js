export async function myItemsView(ctx) {
    const userData = ctx.utils.getUserData()
    const itemsData = await ctx.request(ctx.endpoints.myItems, userData._id)
    const template = ctx.templates.myItemsTemplate(ctx, userData, itemsData);
    ctx.lit.render(template, ctx.sections.pageContainer);
}

