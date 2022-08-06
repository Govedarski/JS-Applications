export async function listView(ctx) {
    const data = await ctx.request(ctx.endpoints.getList)
    const userData = ctx.utils.getUserData()
    const template = ctx.templates.listTemplate(ctx, data, userData);
    ctx.lit.render(template, ctx.sections.pageContainer);
}