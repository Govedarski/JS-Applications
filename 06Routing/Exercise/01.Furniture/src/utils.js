export function getUserData(storage) {
    return JSON.parse(storage.getItem('userData'))
}

export function setUserData(storage, userData){
    storage.setItem('userData',JSON.stringify(userData))
}

export function getFormData(form) {
    const formData = new FormData(form)
    return  Object.fromEntries([...formData.entries()])
}


