

export const listTemplate = (ctx, data) => ctx.lit.html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
    ${ctx.templates.listContentTemplate(ctx, data)}
    </div>
</section>
`;