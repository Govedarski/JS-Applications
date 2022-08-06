const buttonsTemplate = (ctx, data, userData, isOwner, hasDonate, onDelete) => ctx.lit.html`
            <div class="actionBtn">
                ${isOwner
    ? ctx.lit.html`
                <a href="/edit/${data._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>
`:
    null}
                ${(!isOwner && !hasDonate)
    ? ctx.lit.html`<a href="/donate/${data._id}" class="donate">Donate</a>`
    :null}
`;


export const detailsTemplate = (ctx, data, userData, isOwner,donateNumber, hasDonate, onDelete) => ctx.lit.html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${data.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${data.name}</h1>
                <h3>Breed: ${data.breed}</h3>
                <h4>Age: ${data.age}</h4>
                <h4>Weight: ${data.weight}</h4>
                <h4 class="donation">Donation: ${donateNumber}$</h4>
            </div>
            ${userData ? buttonsTemplate(ctx, data, userData, isOwner, hasDonate, onDelete) : null}
        </div>
    </div>
</section>
`;