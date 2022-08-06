const buttonsTemplate = (ctx, data, userData, isOwner, hasDonate, onDelete) => ctx.lit.html`
            ${isOwner
            ? ctx.lit.html`
                <a class="button" href="/edit/${data._id}">Edit</a>
                <a class="button" href="javascript:void(0)" @click = ${onDelete}>Delete</a>`
            : null}
            ${!isOwner && !hasDonate ?ctx.lit.html`<a class="button" href="/donate/${data._id}">Like</a>` :null}
`;


export const detailsTemplate = (ctx, data, userData, isOwner, donateNumber, hasDonate, onDelete) => ctx.lit.html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${data.title}</h3>
        <p class="type">Type: ${data.type}</p>
        <p class="img"><img src="${data.imageUrl}"></p>
        <div class="actions">
            ${userData?buttonsTemplate(ctx, data, userData, isOwner, hasDonate, onDelete):null}
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${donateNumber}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${data.description}</p>
    </div>
</section>
`;