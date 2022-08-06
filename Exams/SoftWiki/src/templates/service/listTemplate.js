export const itemCardTemplate = (ctx, userData, data) => ctx.lit.html`
    <a class="article-preview" href="details/${data._id}">
        <article>
            <h3>Topic: <span>${data.title}</span></h3>
            <p>Category: <span>${data.category}</span></p>
        </article>
    </a>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
    <h3 class="no-articles">No articles yet</h3>
`;

export const listContentTemplate = (ctx, data, userData) => ctx.lit.html`
    ${data.length ? ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx, userData)) : noContentTemplate(ctx)}
`;


const paginatorTemplate = (ctx, page, pages) => ctx.lit.html`
    ${page === 1
    ?ctx.lit.html`<a>&ltPrevious</a>`
    :ctx.lit.html`<a href="?page=${page - 1}">&ltPrevious</a>`
}
    
    <a>Page: ${page}</a>
    
    ${page === pages
    ?ctx.lit.html`<a>Next&gt</a>`
    :ctx.lit.html`<a href="?page=${page + 1}">Next&gt</a>`
}
`

export const listTemplate = (ctx, data, userData, page, pages) => ctx.lit.html`
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>
    ${listContentTemplate(ctx, data, userData)} 
<div>
    ${paginatorTemplate(ctx, page, pages)}
</div>
</section>
`;

