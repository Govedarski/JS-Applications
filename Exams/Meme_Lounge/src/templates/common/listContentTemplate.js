const memeCardTemplate = (ctx, data) => ctx.lit.html`
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">${data.title}</p>
                    <img class="meme-image" alt="meme-img" src="${data.imageUrl}">
                </div>
                <div id="data-buttons">
                    <a class="button" href="/details/${data._id}">Details</a>
                </div>
            </div>
        </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
        <p class="no-memes">No memes in database.</p>
`;

export const listContentTemplate = (ctx, data) => ctx.lit.html`
   ${data.length
    ? ctx.lit.repeat(data, d => d._id, memeCardTemplate.bind(null, ctx))
    : noContentTemplate(ctx)}
`;