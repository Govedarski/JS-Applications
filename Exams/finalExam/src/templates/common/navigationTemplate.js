const userNavigationTemplate = (ctx) => ctx.lit.html`
                   <div class="user">
            <a href="/create">Create Offer</a>
            <a href="/logout">Logout</a>
          </div>
`;

const guestNavigationTemplate = (ctx) => ctx.lit.html`
                          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
`;

export const navigationTemplate = (ctx, userData) => ctx.lit.html`
        <!-- Navigation -->
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt=""/></a>

        <nav>
          <div>
            <a href="/all">Dashboard</a>
          </div>
            ${userData ?userNavigationTemplate(ctx):guestNavigationTemplate(ctx)}
        </nav>

`;


