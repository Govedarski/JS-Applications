export async function homeView(ctx) {
    const data = await ctx.request(ctx.endpoints.recentItems)

    const template = ctx.templates.homeTemplate(ctx, data.slice(0,3))
    ctx.lit.render(template, ctx.sections.pageContainer)
}