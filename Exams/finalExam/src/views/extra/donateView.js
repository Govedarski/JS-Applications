
export async function applyView(ctx) {
    ctx.request(ctx.endpoints.apply, {offerId:ctx.params.pk})
    ctx.page.redirect('/details/' + ctx.params.pk)
}