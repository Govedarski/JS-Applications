const listContent = (ctx, data) => ctx.lit.html`
        <div class="user-meme">
            <p class="user-meme-title">${data.title}</p>
            <img class="userProfileImage" alt="meme-img" src="${data.imageUrl}">
            <a class="button" href="/details/${data._id}">Details</a>
        </div>`;
const noContent = (ctx) => ctx.lit.html`
        <p class="no-memes">No memes in database.</p>

`;
export const profileTemplate = (ctx, userData, memesData) => ctx.lit.html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${memesData.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
${memesData.length
    ? ctx.lit.repeat(memesData, d => d._id, listContent.bind(null, ctx))
    : noContent(ctx)}
    </div>
</section>
`;