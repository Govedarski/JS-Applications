const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
                    <li><a href="/mine">Profile</a></li>
                    <li><a href="/create">Create Event</a></li>
                    <li><a href="/logout">Logout</a></li>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
            <nav>
                <a href="/">Theater</a>
                <ul>
                    ${userData ?userNavigationTemplate(ctx):guestNavigationTemplate(ctx)}
                </ul>
            </nav>
`;


