export const itemCardTemplate = (ctx, userData, data) => ctx.lit.html`
<div class="offer">
        <img src="${data.imageUrl}" alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${data.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
        <a class="details-btn" href="/details/${data._id}">Details</a>
    </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
    <h2>No offers yet.</h2>
`;

export const listContentTemplate = (ctx, data, userData) => ctx.lit.html`
    ${data.length ? ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx, userData)) : noContentTemplate(ctx)}
`;


export const listTemplate = (ctx, data, userData) => ctx.lit.html`
<section id="dashboard">
    <h2>Job Offers</h2>
${listContentTemplate(ctx, data, userData)} 
</section>
`;

