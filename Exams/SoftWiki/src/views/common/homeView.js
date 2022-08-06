export async function homeView(ctx) {
    const data = await ctx.request(ctx.endpoints.recentItems)
    const javaScript = data.find(x=>x.category === "JavaScript") || null
    const cSharp = data.find(x=>x.category === "C#") || null
    const java = data.find(x=>x.category === "Java") || null
    const python = data.find(x=>x.category === "Python") || null

    const template = ctx.templates.homeTemplate(ctx, javaScript, cSharp, java, python)
    ctx.lit.render(template, ctx.sections.pageContainer)
}