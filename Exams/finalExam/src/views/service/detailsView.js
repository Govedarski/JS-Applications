export async function detailsView(ctx) {
    const userData = ctx.utils.getUserData();
    const userId = userData && userData._id;


    let [data, appliedNumber] = await Promise.all([
        ctx.request(ctx.endpoints.getDetails, ctx.params.pk),
        ctx.request(ctx.endpoints.applyNumber, ctx.params.pk),
    ]);

    let hasApplied;
    if (userData){
        hasApplied = await ctx.request(ctx.endpoints.hasApply, ctx.params.pk, userId)
    }


    const isOwner = data._ownerId === userId;

    const template = ctx.templates.detailsTemplate(
        ctx,
        data,
        userData,
        isOwner,
        appliedNumber,
        hasApplied,
        onDelete.bind(null, ctx));

    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onDelete(ctx) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        ctx.request(ctx.endpoints.delete, ctx.params.pk);
        ctx.page.redirect('/all');
    }
}
