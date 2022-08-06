const resultsTemplate = (ctx, results, userData) => ctx.lit.html`
    <div class="search-result">
        ${results.length
            ?ctx.lit.html`${ctx.lit.repeat(results, r=>r._id, ctx.templates.itemCardTemplate.bind(null, ctx, userData))}`
            :ctx.lit.html`<p class="no-result">No result.</p>`}
    </div>
`

export const searchTemplate = (ctx, results, userData, onSearch) => ctx.lit.html`
<section id="searchPage">
    <h1>Search by Name</h1>
    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list" @click="${onSearch}">Search</button>
    </div>

    <h2>Results:</h2>
    ${results ?resultsTemplate(ctx, results, userData) : null}
</section>
`;