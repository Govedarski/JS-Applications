const itemCardTemplate = (ctx, data) => ctx.lit.html`
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="${data.image}">
            </article>
            <h2 class="name">${data.name}</h2>
            <h3 class="breed">${data.breed}</h3>
            <div class="action">
                <a class="btn" href="/details/${data._id}">Details</a>
            </div>
        </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>
`;

export const listContentTemplate = (ctx, data) => ctx.lit.html`
    ${data.length
    ? ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx))
    : noContentTemplate(ctx)}
`;


export const listTemplate = (ctx, data) => ctx.lit.html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    
    <div class="animals-dashboard">
    ${listContentTemplate(ctx, data)}
    </div>
    
</section>
`;