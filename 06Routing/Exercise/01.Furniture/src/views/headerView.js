
const headerTemplate = (ctx, user, onLogout) => ctx.html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="/" class="active">Dashboard</a>
        ${user
    ? ctx.html`
        <div id="user">
            <a id="createLink" href="/create" >Create Furniture</a>
            <a id="profileLink" href="/my-furniture" >My Publications</a>
            
            <a id="logoutBtn" href="javascript:void(0)" @click=${onLogout}>Logout</a>
            
        </div>`
    : ctx.html`<div id="guest">
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>
        </div>`}
    </nav>
`;

export function headerView(ctx, next) {
    const user = ctx.utils.getUserData(sessionStorage);
    const template = headerTemplate(ctx, user, onLogout.bind(null, ctx));
    ctx.render(template, ctx.header);
    next?next():null;
}

function onLogout(ctx) {
    ctx.request('logout')
    sessionStorage.removeItem('userData')
    headerView(ctx)
}