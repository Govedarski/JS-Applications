export async function detailsView(ctx) {
    const userData = ctx.utils.getUserData();
    const userId = userData && userData._id;


    let [data, donateNumber] = await Promise.all([
        ctx.request(ctx.endpoints.getDetails, ctx.params.pk),
        ctx.request(ctx.endpoints.donateNumber, ctx.params.pk),
    ]);

    let hasDonate;
    if (userData){
        hasDonate = await ctx.request(ctx.endpoints.hasDonate, ctx.params.pk, userId)
    }

    // const [data, comments] = await Promise.all([
    //     await ctx.request(ctx.endpoints.getDetails, ctx.params.pk),
    //     await ctx.request(ctx.endpoints.getComments, ctx.params.pk),
    // ])

    // const data = await ctx.request(ctx.endpoints.getDetails, ctx.params.pk)

    const isOwner = data._ownerId === userId;
    const template = ctx.templates.detailsTemplate(
        ctx,
        data,
        userData,
        isOwner,
        // comments,
        donateNumber,
        hasDonate,
        // submitComment.bind(null, ctx),
        onDelete.bind(null, ctx));

    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onDelete(ctx) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        ctx.request(ctx.endpoints.delete, ctx.params.pk);
        ctx.page.redirect('/');
    }
}

// async function submitComment(ctx, event){
//     event.preventDefault();
//
//     const data = ctx.utils.getFormData(event.target);
//
//     const validationResult = ctx.validators.validateForm(event.target,
//         {
//             comment: [ctx.validators.checkIsFilled],
//         });
//
//     if (validationResult.errorsNumber > 0) return
//
//     await ctx.request(ctx.endpoints.createComment,
//         {
//             gameId:ctx.params.pk,
//             comment: data.comment,
//         },
//         // ctx.notification.showNotification
//     );
//     ctx.page.redirect('/details/' +ctx.params.pk);
// }