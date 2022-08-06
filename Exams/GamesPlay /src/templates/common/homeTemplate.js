const itemCardTemplate = (ctx, data) => ctx.lit.html`
        <div class="game">
            <div class="image-wrap">
                <img src="${data.imageUrl}">
            </div>
            <h3>${data.title}</h3>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div class="data-buttons">
                <a href="/details/${data._id}" class="btn details-btn">Details</a>
            </div>
        </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
<p class="no-articles">No games yet</p>
`;

export const listContentTemplate = (ctx, data) => ctx.lit.html`
    ${data.length
    ? ctx.lit.repeat(data, d => d._id, itemCardTemplate.bind(null, ctx))
    : noContentTemplate(ctx)}
`;

export const homeTemplate = (ctx, data) => ctx.lit.html`
<section id="welcome-world">
    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

        ${listContentTemplate(ctx, data)}
    </div>
</section>
`;