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