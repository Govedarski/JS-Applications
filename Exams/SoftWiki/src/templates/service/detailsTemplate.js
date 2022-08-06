export const detailsTemplate = (ctx, data, userData, isOwner, onDelete) => ctx.lit.html`
<section id="details-page" class="content details">
    <h1>${data.title}</h1>

    <div class="details-content">
        <strong>Published in category ${data.category}</strong>
        <p>${data.content}</p>

        <div class="buttons">
                    ${isOwner ? ctx.lit.html`
            <a href="javascript:void(0)" class="btn delete" @click="${onDelete}">Delete</a>
            <a href="/edit/${data._id}" class="btn edit">Edit</a>`
    :null}
            <a href="javascript:history.back()" class="btn edit">Back</a>
        </div>
    </div>
</section>

`;

