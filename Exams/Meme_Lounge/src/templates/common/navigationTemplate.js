const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
    <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${userData.email}</span>
            <a href="/myProfile">My Profile</a>
            <a href="/logout">Logout</a>
        </div>
    </div>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/">Home Page</a>
    </div>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
            <a href="/all">All Memes</a>
            ${userData
    ?
    userNavigationTemplate(ctx, userData)
    :
    guestNavigationTemplate(ctx)
}
`;

