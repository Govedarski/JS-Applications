import {checkAddressMinLength, checkPhoneMinLength} from '../../common/validators.js';

export function createView(ctx) {
    const template = ctx.templates.createTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.lit.render(template, ctx.sections.pageContainer);
}

async function onSubmit(ctx, event) {
    event.preventDefault();

    const data = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            title: [ctx.validators.checkTitleMinLength],
            description: [ctx.validators.checkDescriptionMinLength],
            imageUrl: [ctx.validators.checkImageUrlMinLength],
            address: [ctx.validators.checkAddressMinLength],
            phone: [ctx.validators.checkPhoneMinLength],
        });

    if (validationResult.errorsNumber > 0) return

    await ctx.request(ctx.endpoints.create,
        {
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            address: data.address,
            phone: data.phone,
        },
        // ctx.notification.showNotification
    );
    ctx.page.redirect('/all');
}