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
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src="${data.imgUrl}">
            </div>
            <div class="albumInfo">
                <div class="albumText">
    
                    <h1>Name: ${data.name}</h1>
                    <h3>Artist: ${data.artist}</h3>
                    <h4>Genre: ${data.genre}</h4>
                    <h4>Price: $${data.price}</h4>
                    <h4>Date: ${data.releaseDate}</h4>
                    <p>Description: ${data.description}</p>
                </div>
    
                ${isOwner
                    ?ctx.lit.html`
                        <div class="actionBtn">
                            <a href="/edit/${data._id}" class="edit">Edit</a>
                            <a href="javascript:void(0)" class="remove" @click="${onDelete}">Delete</a>
                        </div>`
                    :null}
            </div>
        </div>
    </section>
`;

