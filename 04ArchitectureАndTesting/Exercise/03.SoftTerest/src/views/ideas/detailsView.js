export async function detailsView(ctx) {
    const data = await ctx.request.get(`/data/ideas/`+ctx.id)
    ctx.render.details(data, del.bind(null, ctx))
}

async function del(ctx, e) {
    e.preventDefault()
    await ctx.request.del(`/data/ideas/` + e.target.id)
    ctx.goTo('dashboard')
}