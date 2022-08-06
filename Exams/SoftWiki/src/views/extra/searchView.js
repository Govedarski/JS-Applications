export async function searchView(ctx) {
    const search = ctx.query.search || ''
    let data
    if(search !== ''){
    data = await ctx.request(ctx.endpoints.search, search)
    }
    const userData = ctx.utils.getUserData()

    const template = ctx.templates.searchTemplate(ctx, data, userData, onSearch.bind(null, ctx))
    ctx.lit.render(template, ctx.sections.pageContainer)
}

function onSearch(ctx, event) {
    event.preventDefault()

    const search = ctx.utils.getFormData(event.target).search;

    ctx.page.redirect('/search?search=' + search)
}