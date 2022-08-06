const itemCardTemplate = (ctx, data) => ctx.lit.html`
    <div class="allGames">
        <div class="allGames-info">
            <img src="${data.imageUrl}">
            <h6>${data.category}</h6>
            <h2>${data.title}</h2>
            <a href="/details/${data._id}" class="details-button">Details</a>
        </div>
    </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
    <h3 class="no-articles">No articles yet</h3>
`;

export const listContentTemplate = (ctx, data) => ctx.lit.html`
    ${data.length
    ? ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx))
    : noContentTemplate(ctx)}
`;


export const listTemplate = (ctx, data) => ctx.lit.html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${listContentTemplate(ctx, data)}  
</section>
`;