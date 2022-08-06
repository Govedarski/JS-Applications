export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setUserData(userData){
    sessionStorage.setItem('userData',JSON.stringify(userData))
}

export function getFormData(form) {
    const formData = new FormData(form)
    return  Object.fromEntries([...formData.entries()].map(([k,v])=>[k, v.trim()]))
}

export function parseQueryString(ctx, next) {
    ctx.query = {};
    if (ctx.querystring) {
        const query = Object.fromEntries(ctx.querystring
            .split('&')
            .map(p => p.split('=')));
        Object.assign(ctx.query, query);
    }

    next();
}