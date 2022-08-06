export const itemCardTemplate = (ctx, userData, data) => ctx.lit.html`
    <div class="card-box">
        <img src="${data.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${data.name}</p>
                <p class="artist">Artist: ${data.artist}</p>
                <p class="genre">Genre: ${data.genre}</p>
                <p class="price">Price: $${data.price}</p>
                <p class="date">Release Date: ${data.releaseDate}</p>
            </div>
            ${userData 
            ? ctx.lit.html`            
                <div class="btn-group">
                    <a href="/details/${data._id}" id="details">Details</a>
                </div>` 
            : null}
        </div>
    </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
    <p>No Albums in Catalog!</p>
`;

export const listContentTemplate = (ctx, data, userData) => ctx.lit.html`
    ${data.length ? ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx, userData)) : noContentTemplate(ctx)}
`;


export const listTemplate = (ctx, data, userData) => ctx.lit.html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${listContentTemplate(ctx, data, userData)} 
</section>
`;

