export function logoutView(ctx) {
    ctx.request(ctx.endpoints.logout)
    sessionStorage.removeItem('userData')
    ctx.page.redirect('/all')
}