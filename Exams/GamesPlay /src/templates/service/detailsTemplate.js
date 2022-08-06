const commentCardTemplate = (ctx, data) => ctx.lit.html`
                <li class="comment">
                    <p>${data.comment}</p>
                </li>
`;


export const detailsTemplate = (ctx, data, userData, isOwner, comments,submitComment, onDelete) => ctx.lit.html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src="${data.imageUrl}" />
            <h1>${data.title}</h1>
            <span class="levels">MaxLevel: ${data.maxLevel}</span>
            <p class="type">${data.category}</p>
        </div>
        <p class="text">
            ${data.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length
?ctx.lit.html`<ul>${ctx.lit.repeat(comments, c=>c._id, commentCardTemplate.bind(null,ctx))}</ul>`
:ctx.lit.html`<p class="no-comment">No comments.</p>`}                     
        </div>

        ${isOwner
            ?ctx.lit.html`
        <div class="buttons">
            <a href="/edit/${data._id}" class="button">Edit</a>
            <a href="javascript:void(0)" class="button" @click="${onDelete}">Delete</a>
        </div>`
            :null}
    </div>

    ${(userData && !isOwner)
    ?ctx.lit.html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form" @submit = ${submitComment}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>`
    :null}
</section>
`;

