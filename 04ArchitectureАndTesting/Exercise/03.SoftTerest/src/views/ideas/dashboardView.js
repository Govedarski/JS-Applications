export async function dashboardView(ctx) {
    const recipesData = await ctx.request.get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc')
    ctx.render.dashboard(recipesData, detailsFunc.bind(null, ctx))
}

function detailsFunc(ctx, e) {
    if(e.target.tagName !== "A")return
    e.preventDefault()
    ctx.goTo('details',{id:e.target.id})
}