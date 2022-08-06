const userNavigationTemplate = (ctx, userData) => ctx.lit.html`
                <div id="profile">
                    <a>Welcome ${userData.username}</a>
                    <a href="/mine">My Listings</a>
                    <a href="/create">Create Listing</a>
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
            <nav>
                <a class="active" href="/">Home</a>
                <a href="/all">All Listings</a>
                <a href="/search">By Year</a>
                ${userData ?userNavigationTemplate(ctx, userData):guestNavigationTemplate(ctx)}
            </nav>
`;


