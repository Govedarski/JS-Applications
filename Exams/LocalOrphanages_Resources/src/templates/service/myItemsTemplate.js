const memeCardTemplate = (ctx, data) => ctx.lit.html`
        <div class="post">
            <h2 class="post-title">${data.title}</h2>
            <img class="post-image" src="${data.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${data._id}" class="details-btn btn">Details</a>
            </div>
        </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
    <h1 class="title no-posts-title">You have no posts yet!</h1>
`;

export const listContentTemplate = (ctx, data) => ctx.lit.html`
   ${data.length
    ? ctx.lit.html`
      <div class="my-posts">
        ${ctx.lit.repeat(data, d => d._id, memeCardTemplate.bind(null, ctx))}
      </div>`
    : noContentTemplate(ctx)}
`;


export const myItemsTemplate = (ctx, userData, itemsData) => ctx.lit.html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
${listContentTemplate(ctx, itemsData)}
</section>
`;