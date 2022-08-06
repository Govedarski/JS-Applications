const resultsTemplate = (ctx, results, userData) => ctx.lit.html`
    <div class="search-result">
        ${results.length
            ?ctx.lit.html`${ctx.lit.repeat(results, r=>r._id, ctx.templates.itemCardTemplate.bind(null, ctx, userData))}`
            :ctx.lit.html`<p class="no-cars"> No results.</p>`}
    </div>
`

export const searchTemplate = (ctx, results, userData, onSearch) => ctx.lit.html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button class="button-list" @click="${onSearch}">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${results ?resultsTemplate(ctx, results, userData) : null}
    </div>
</section>
`;