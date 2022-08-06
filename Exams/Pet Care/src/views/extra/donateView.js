
export async function donateView(ctx) {
    ctx.request(ctx.endpoints.donate, {petId:ctx.params.postId})
    ctx.page.redirect('/details/' + ctx.params.postId)
}