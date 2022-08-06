export function homeView(ctx) {
    const template = ctx.templates.homeTemplate(ctx)
    ctx.lit.render(template, ctx.sections.pageContainer)
}