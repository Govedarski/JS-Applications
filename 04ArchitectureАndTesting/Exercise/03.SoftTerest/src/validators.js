const EMAIL_MIN_LENGTH = 3
const PASSWORD_MIN_LENGTH = 3
const TITLE_MIN_LENGTH = 6
const DESCRIPTION_MIN_LENGTH = 10
const IMAGE_MIN_LENGTH = 5

export function validate(validators) {
    const errors = []
    validators.forEach(v=>{
            try {
                v()
                } catch (error) {
                errors.push(error)
                }
    })
    return errors
}

function validateMinLength(minLength, fieldName, value){
    if(value.length < minLength){
        throw Error(`${fieldName} must be at least ${minLength} characters long!`)
    }
}

export function validatePasswordMatch(password, password1){
    if(password !== password1){
        throw Error('Password mismatched!')
    }
}


export const validateEmailMinLength = validateMinLength.bind(null, EMAIL_MIN_LENGTH, "Email")
export const validatePasswordMinLength = validateMinLength.bind(null, PASSWORD_MIN_LENGTH, "Password")
export const validateTitleMinLength = validateMinLength.bind(null, TITLE_MIN_LENGTH, "Title")
export const validateDescriptionMinLength = validateMinLength.bind(null, DESCRIPTION_MIN_LENGTH, "Description")
export const validateImageMinLength = validateMinLength.bind(null, IMAGE_MIN_LENGTH, "Image url")