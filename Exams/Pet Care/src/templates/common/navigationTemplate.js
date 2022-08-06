const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
                <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
        <nav>
            <section class="logo">
                <img src="/images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/all">Dashboard</a></li>
                <!--Only Guest-->
        ${userData ?userNavigationTemplate(ctx):guestNavigationTemplate(ctx)}
                <!--Only Users-->
            </ul>
        </nav>
`;


