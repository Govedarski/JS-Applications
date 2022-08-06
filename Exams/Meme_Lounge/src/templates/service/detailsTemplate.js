export const detailsTemplate = (ctx, data, isOwner, onDelete) => ctx.lit.html`
<section id="meme-details">
    <h1>Meme Title: ${data.title}</h1>
    
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${data.imageUrl}">
        </div>
        
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${data.description}
            </p>
            
            ${isOwner
    ? ctx.lit.html`
            <a class="button warning" href="/edit/${data._id}">Edit</a>
            <button class="button danger" @click="${onDelete}">Delete</button>`
    : null}
        </div>
    </div>
</section>
`;