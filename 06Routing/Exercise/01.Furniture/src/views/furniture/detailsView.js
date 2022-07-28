const detailsTemplate = (ctx, data) => ctx.html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${data.img.slice(1)} />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${data.make}</span></p>
            <p>Model: <span>${data.model}</span></p>
            <p>Year: <span>${data.year}</span></p>
            <p>Description: <span>${data.description}</span></p>
            <p>Price: <span>${data.price}</span></p>
            <p>Material: <span>${data.material}</span></p>
            
            ${
    data._ownerId === ctx.utils.getUserData(sessionStorage)._id
        ? ctx.html`
            <div>
                <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
                <a href="/delete/${data._id}" class="btn btn-red">Delete</a>
            </div>`
        : null}
            
        </div>
    </div>
`;

export async function detailsView(ctx) {
    const data = await ctx.cache.functions.getSingleData(ctx, 'getFurniture', ctx.params.id);
    const template = detailsTemplate(ctx, data);
    ctx.render(template, ctx.main);
}