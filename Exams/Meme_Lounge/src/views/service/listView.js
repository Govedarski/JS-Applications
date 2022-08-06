export async function listView(ctx) {
    const data = await ctx.request(ctx.endpoints.showList)
    const template = ctx.templates.listTemplate(ctx, data);
    ctx.lit.render(template, ctx.sections.pageContainer);
}