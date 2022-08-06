const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
               <li><a href="/create">Create Album</a></li>
                    <li><a href="/logout">Logout</a></li>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
                         <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
            <nav>
                <img src="/images/headphones.png">
                <a href="/">Home</a>
                <ul>
                    <li><a href="/all">Catalog</a></li>
                    <li><a href="/search">Search</a></li>
                    ${userData ?userNavigationTemplate(ctx):guestNavigationTemplate(ctx)}
                </ul>
            </nav>
`;


