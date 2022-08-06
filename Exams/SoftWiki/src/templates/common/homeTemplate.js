const articleCardTemplate = (ctx, data) => ctx.lit.html`
        <article>
            <h3>${data.title}</h3>
            <p>${data.content}</p>
            <a href="/details/${data._id}" class="btn details-btn">Details</a>
        </article>
`;

export const homeTemplate = (ctx, javaScript, cSharp, java, python) => ctx.lit.html`
    <section id="home-page" class="content">
        <h1>Recent Articles</h1>
        
        <section class="recent js">
            <h2>JavaScript</h2>
            ${javaScript?articleCardTemplate(ctx, javaScript):ctx.lit.html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        
        <section class="recent csharp">
            <h2>C#</h2>
            ${cSharp?articleCardTemplate(ctx, cSharp):ctx.lit.html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        
        <section class="recent java">
            <h2>Java</h2>
            ${java?articleCardTemplate(ctx, java):ctx.lit.html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        
        <section class="recent python">
            <h2>Python</h2>
            ${python?articleCardTemplate(ctx, python):ctx.lit.html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
    </section>
`;