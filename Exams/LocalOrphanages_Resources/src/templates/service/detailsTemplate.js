const buttonsTemplate = (ctx, data, userData, isOwner, hasDonate, onDelete) => ctx.lit.html`
    <div class="btns">
        ${isOwner
                ? ctx.lit.html`
                       <a href="/edit/${data._id}" class="edit-btn btn">Edit</a>
        <a href="javascript:void(0)" class="delete-btn btn" @click=${onDelete}>Delete</a>`
                : null}
 
        ${!(isOwner || hasDonate)
    ?ctx.lit.html`<a href="/donate/${data._id}" class="donate-btn btn">Donate</a>`
:null}
        
    </div>
`;


export const detailsTemplate = (ctx, data, userData, isOwner, donateNumber,hasDonate, onDelete) => ctx.lit.html`
<section id="details-page">
    <h1 class="title">Post Details</h1>
    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${data.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${data.title}</h2>
                <p class="post-description">Description: ${data.description}</p>
                <p class="post-address">Address: ${data.address}</p>
                <p class="post-number">Phone number: ${data.phone}</p>
                <p class="donate-Item">Donate Materials: ${donateNumber}</p>

                ${userData ? buttonsTemplate(ctx, data, userData, isOwner, hasDonate, onDelete) : null}
            </div>
        </div>
    </div>
</section>
`;