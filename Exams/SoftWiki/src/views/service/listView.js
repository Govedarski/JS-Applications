export async function listView(ctx) {

    const page = Number(ctx.query.page) || 1
    const itemsPerPage = 1
    const queryOffset = String((page-1)*itemsPerPage)
    const queryPageSize = String(itemsPerPage)
    const [data, itemsNumber] = await Promise.all([
        ctx.request(ctx.endpoints.getItemsByPage, queryOffset, queryPageSize),
        ctx.request(ctx.endpoints.getItemsNumber)
    ])

    const pages = Math.ceil(Number(itemsNumber)/itemsPerPage)

    const userData = ctx.utils.getUserData()
    const template = ctx.templates.listTemplate(ctx, data, userData, page, pages);
    ctx.lit.render(template, ctx.sections.pageContainer);
}