
export async function deleteView(ctx) {
    alert('Are you sure?')
    await ctx.cache.functions.deleteData(ctx, 'deleteFurniture', ctx.params.id)
    ctx.redirect('/')
}