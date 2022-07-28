
const furnitureCardTemplate = (ctx, data) => ctx.html`
        <div class="col-md-4">

            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${data.img} />
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

const homePageTemplate = (ctx, data) => ctx.html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        
          ${ctx.litRepeat(data, d=>d._id, d => furnitureCardTemplate(ctx, d))}
            
    </div>
`

export async function homePageView(ctx) {
    let data = await ctx.cache.functions.getAllData(ctx, 'getAllFurniture')
    const template = homePageTemplate(ctx, data)
    ctx.render(template, ctx.main)
}