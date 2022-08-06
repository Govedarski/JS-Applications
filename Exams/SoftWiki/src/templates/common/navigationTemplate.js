const userNavigationTemplate = (ctx) => ctx.lit.html`
                    <a href="/create">Create</a>
                    <a href="/logout">Logout</a>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
            <h1><a class="home" href="/">SoftWiki</a></h1>
            <nav class="nav-buttons">
                <a href="/all">Catalogue</a>
                <a href="/search">Search</a>
                ${userData ?userNavigationTemplate(ctx, userData):guestNavigationTemplate(ctx)}
            </nav>
`;


