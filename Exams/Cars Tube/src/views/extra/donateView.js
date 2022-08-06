
export async function donateView(ctx) {
    ctx.request(ctx.endpoints.donate, {petId:ctx.params.pk})
    ctx.page.redirect('/details/' + ctx.params.pk)
}