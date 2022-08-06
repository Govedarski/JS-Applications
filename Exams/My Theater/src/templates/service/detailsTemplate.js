const buttonsTemplate = (ctx, data, userData, isOwner, hasDonate, onDelete) => ctx.lit.html`
    <div class="buttons">
        ${isOwner
    ? ctx.lit.html`
        <a class="btn-delete" href="javascript:void(0)" @click="${onDelete}">Delete</a>
        <a class="btn-edit" href="/edit/${data._id}">Edit</a>`
    : null}

        ${!(isOwner || hasDonate)
    ?ctx.lit.html`<a class="btn-like" href="/donate/${data._id}">Like</a>`
    :null}

    </div>
`;



// const commentCardTemplate = (ctx, data) => ctx.lit.html`
//                 <li class="comment">
//                     <p>${data.comment}</p>
//                 </li>
// `;


export const detailsTemplate = (ctx, data, userData, isOwner, donateNumber,hasDonate, onDelete) => ctx.lit.html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${data.title}</h1>
            <div>
                <img src="${data.imageUrl}" />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${data.description}</p>
            <h4>Date: ${data.date}</h4>
            <h4>Author: ${data.author}</h4>
            ${userData?buttonsTemplate(ctx, data, userData, isOwner, hasDonate, onDelete):null}
            <p class="likes">Likes: ${donateNumber}</p>
        </div>
    </div>
</section>
`;

