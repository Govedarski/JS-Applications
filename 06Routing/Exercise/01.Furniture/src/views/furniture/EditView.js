const editTemplate = (ctx, data, onSubmit) => ctx.html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <input id="id" type="text" name="id" .value=${data._id} hidden>
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" .value=${data.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" .value=${data.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" .value=${data.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" .value=${data.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" .value=${data.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" .value=${data.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${data.material}>
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
`;

export async function editView(ctx) {
    const data =  await  ctx.cache.functions.getSingleData(ctx, 'getFurniture', ctx.params.id);
    if(ctx.utils.getUserData(sessionStorage)._id !== data._ownerId) return ctx.redirect('/')
    const template = editTemplate(ctx, data, onSubmit.bind(null, ctx));
    ctx.render(template, ctx.main)
}

async function onSubmit(ctx, e) {
    e.preventDefault();
    const validationResults = ctx.validators.validateForm(е.target, {
            make: [ctx.validators.checkMakeMinLength],
            model: [ctx.validators.checkModelMinLength],
            year: [ctx.validators.checkYearRange],
            description: [ctx.validators.checkDescriptionMinLength],
            price: [ctx.validators.checkPricePositive],
        },
        false);

    if (validationResults.errorsNumber > 0) {

        return ctx.validators.onValidationFail(validationResults)
    }

    const formData = ctx.utils.getFormData(е.target);
    const id = formData.id
    delete formData.id
    await ctx.cache.functions.editData(ctx, "updateFurniture", id, formData)
    ctx.redirect('/')
}