const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
                    <div id="user">
                        <span>Welcome, ${userData.email}</span>
                        <a class="button" href="/mine">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/all">Dashboard</a>
                    ${userData ? userNavigationTemplate(ctx, userData) : guestNavigationTemplate(ctx)}
                </section>
            </nav>
`;


