// const buttonsTemplate = (ctx, data, userData, isOwner, hasDonate, onDelete) => ctx.lit.html`
//     <div class="buttons">
//         ${isOwner
//     ? ctx.lit.html`
//         <a class="btn-delete" href="javascript:void(0)" @click="${onDelete}">Delete</a>
//         <a class="btn-edit" href="/edit/${data._id}">Edit</a>`
//     : null}
//
//         ${!(isOwner || hasDonate)
//     ?ctx.lit.html`<a class="btn-like" href="/donate/${data._id}">Like</a>`
//     :null}
//
//     </div>
// `;


// const commentCardTemplate = (ctx, data) => ctx.lit.html`
//                 <li class="comment">
//                     <p>${data.comment}</p>
//                 </li>
// `;


export const detailsTemplate = (ctx, data, userData, isOwner, onDelete) => ctx.lit.html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src="${data.imageUrl}">
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${data.brand}</li>
                <li><span>Model:</span>${data.model}</li>
                <li><span>Year:</span>${data.year}</li>
                <li><span>Price:</span>${data.price}$</li>
            </ul>
    
            <p class="description-para">${data.description}</p>
            ${isOwner ? ctx.lit.html`
                <div class="listings-buttons">
                    <a href="/edit/${data._id}" class="button-list">Edit</a>
                    <a href="javascript:void(0)" class="button-list" @click="${onDelete}">Delete</a>
                </div>` 
            :null}
        </div>
    </section>
`;

