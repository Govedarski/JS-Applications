export const PASSWORD_MIN_LENGTH = 6

export function validateFilled(inputValues) {
    if (inputValues.some(input => input === '')) {
        throw Error('All fields are required!');
    }
}

export function validateMinLength(input, length) {
    if (input.length < length ) {
        throw Error(`Field must be at least ${length} characters!`);
    }
}

export function validatePasswordMatch(password, password1) {
    if(password !== password1){
        throw Error('Password mismatched!')
    }
}

export function validateResponse(response, message) {
    if (!response.ok) {
        throw Error(message);
    }
}