const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
                <div id="user">
                    <a href="/create">Create Game</a>
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
            <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/all">All games</a>
                ${userData ?userNavigationTemplate(ctx):guestNavigationTemplate(ctx)}
            </nav>
`;


