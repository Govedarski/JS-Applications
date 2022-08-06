const notificationContainer =     document.querySelector('.notification')
const notificationMessage =notificationContainer.querySelector('span')

function showNotification(message){
    notificationContainer.style.display = 'block'
    notificationMessage.textContent = message
    setTimeout(hideNotification, 3 * 1000)
}

function hideNotification() {
    document.querySelector('.notification').style.display = ''
}

export const notification = {
    showNotification,
    messages:{
        required:"All fields are required!"
    }
}