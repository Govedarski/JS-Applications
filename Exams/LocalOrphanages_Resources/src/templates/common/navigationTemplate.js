const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
<div id="user">
    <a href="/mine">My Posts</a>
    <a href="/create">Create Post</a>
    <a href="/logout">Logout</a>
</div>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
    <h1><a href="/">Orphelp</a></h1>

    <nav>
       <a href="/all">Dashboard</a>
        ${userData
        ?userNavigationTemplate(ctx, userData)
        :guestNavigationTemplate(ctx)}
    </nav>
`;


