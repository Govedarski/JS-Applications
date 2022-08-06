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

function onSearch(ctx) {
    const search = document.getElementById('search-input').value
    if(search === '' || isNaN(Number(search))) return alert('Year must be number')

    ctx.page.redirect('/search?search=' + search)
}