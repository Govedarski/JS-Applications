export function getUserData() {
    const userData = localStorage.getItem('userData')
    return userData && JSON.parse(userData);
}

export function createSubmitHandler(form, callback) {
    form.addEventListener('submit', onSubmit);
    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        callback(Object.fromEntries([...formData.entries()]));
        // form.reset()
    }
}