export function navigationView(ctx, next) {
    const userData = ctx.utils.getUserData()
    const template = ctx.templates.navigationTemplate(ctx, userData)
    ctx.lit.render(
        template,
        ctx.sections.navigationContainer)
    next? next() : null
}