
export function onLogout(ctx) {
    ctx.request.get('/users/logout');
    sessionStorage.removeItem('userData');
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}