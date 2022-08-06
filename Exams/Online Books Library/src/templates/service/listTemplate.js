const itemCardTemplate = (ctx, data) => ctx.lit.html`
        <li class="otherBooks">
            <h3>${data.title}</h3>
            <p>Type: ${data.type}</p>
            <p class="img"><img src="${data.imageUrl}"></p>
            <a class="button" href="/details/${data._id}">Details</a>
        </li>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
<p class="no-books">No books in database!</p>
`;

export const listContentTemplate = (ctx, data) => ctx.lit.html`
    ${data.length 
    ? ctx.lit.html`
        <ul class="other-books-list">
        ${ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx))}
        </ul>` 
    : noContentTemplate(ctx)}
`;


export const listTemplate = (ctx, data) => ctx.lit.html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${listContentTemplate(ctx, data)}
</section>
`;