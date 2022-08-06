const resultsTemplate = (ctx, results, userData) => ctx.lit.html`
    <div class="search-container">
        ${results.length
            ?ctx.lit.html`${ctx.lit.repeat(results, r=>r._id, ctx.templates.itemCardTemplate.bind(null, ctx, userData))}`
            :ctx.lit.html`<h3 class="no-articles">No matching articles</h3>`}
    </div>
`

export const searchTemplate = (ctx, results, userData, onSearch) => ctx.lit.html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form id="search-form" @submit="${onSearch}">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
        ${results ?resultsTemplate(ctx, results, userData) : null}
</section>
`;