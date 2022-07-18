export function getUserToken() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user ? user.accessToken : undefined;

}

export function getFirstId(element) {
    if(element.id){
        return element.id
    }
    return getFirstId(element.parentElement)
}