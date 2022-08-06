
export async function profileView(ctx) {
    const userData = ctx.utils.getUserData(sessionStorage)
    const memesData = await ctx.request(ctx.endpoints.myProfile, userData._id)
    const template = ctx.templates.profileTemplate(ctx, userData, memesData);
    ctx.lit.render(template, ctx.sections.pageContainer);
}

