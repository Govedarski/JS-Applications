
const furnitureCardTemplate = (ctx, data) => ctx.html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${data.img}" />
                            <p>${data.description}</p>
                            <footer>
                                <p>Price: <span>${data.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${data._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`

const detailsTemplate = (ctx, data) => ctx.html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${ctx.litRepeat(data, d=>d._id, d => furnitureCardTemplate(ctx, d))}
        </div>
`;

export async function myFurnitureView(ctx) {
    const userId = ctx.utils.getUserData(sessionStorage)._id
    const data = await ctx.cache.functions.getAllData(ctx, 'getUserFurniture', userId);
    const template = detailsTemplate(ctx, data.filter(x=>x._ownerId===userId));
    ctx.render(template, ctx.main);
}