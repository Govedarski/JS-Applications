export const itemCardTemplate = (ctx, userData, data) => ctx.lit.html`
<div class="listing">
            <div class="preview">
                <img src="${data.imageUrl}">
            </div>
            <h2>${data.brand} ${data.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${data.year}</h3>
                    <h3>Price: ${data.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href="/details/${data._id}" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
    <p class="no-cars">No cars in database.</p>
`;

export const listContentTemplate = (ctx, data, userData) => ctx.lit.html`
    ${data.length ? ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx, userData)) : noContentTemplate(ctx)}
`;


export const listTemplate = (ctx, data, userData) => ctx.lit.html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
    ${listContentTemplate(ctx, data, userData)} 
    </div>
</section>
`;

