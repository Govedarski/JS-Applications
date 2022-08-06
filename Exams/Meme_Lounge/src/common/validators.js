//  VALIDATOR
export function validateForm(form, fieldsValidations, defaultFail = true) {
    const inputs = Array.from(form.querySelectorAll('input, textarea'));
    const errors = {};
    const checkedInputs = [];
    const passedInputs = [];
    const failedInputs = [];

    for (const fieldName in fieldsValidations) {
        const input = inputs.find(x => x.name === fieldName);
        checkedInputs.push(input);
        const validators = fieldsValidations[fieldName];
        const errorsObject = isValidate(validators, input.value, fieldName);

        if (errorsObject.isError) {
            errors[fieldName] = errorsObject.errors;
            failedInputs.push(input);
            continue;
        }
        passedInputs.push(input);
    }
    const results = {
        errors,
        errorsNumber: failedInputs.length,
        all: inputs,
        checked: checkedInputs,
        failed: failedInputs,
        passed: passedInputs,
    };
    if (defaultFail && results.errorsNumber > 0) {
        alert(Object.values(results.errors).join('\n'));
    }
    return results;
}

function isValidate(validators, fieldName, value) {
    const errors = [];
    let isError = false;

    validators.forEach(validator => {
        try {
            validator(fieldName, value);
        } catch (error) {
            isError = true;
            errors.push(error);
        }
    });
    return {errors, isError};
}

// ON FAIL
export function onValidationFail(results) {
    results.all.forEach(x => x.classList.add('is-valid'));
    results.failed.forEach(x => {
        x.classList.replace('is-valid', 'is-invalid');
    });
    results.passed.forEach(x => {
        x.classList.replace('is-invalid', 'is-valid');
    });
}

//  BASE VALIDATION FUNCTIONS
function checkMinLength(minLength, value, fieldName,) {
    if (value.length < minLength) {
        throw Error(`${fieldName} must be at least ${minLength} characters long!`);
    }
}

function checkRange(minRange, maxRange, value, fieldName) {
    if (value === '') {
        throw Error(`${fieldName} must contains than number!`);
    }
    value = Number(value);
    if (!(value >= minRange && value <= maxRange)) {
        throw Error(`${fieldName} must be between ${minRange} and ${maxRange}!`);
    }
}

function checkMinValue(minValue, value, fieldName) {
    if (value === '') {
        throw Error(`${fieldName} must contains than number!`);
    }
    value = Number(value);
    if (!(value >= minValue)) {
        throw Error(`${fieldName} must be greater than ${minValue}!`);
    }
}

export function checkPasswordMatch(rePass, password) {
    console.log(rePass);
    console.log(password);
    if (rePass !== password) {
        throw Error('Password mismatched!');
    }
}

// CONSTANTS
const EMAIL_MIN_LENGTH = 1;
const PASSWORD_MIN_LENGTH = 1;
const USERNAME_MIN_LENGTH = 1;
const GENDER_MIN_LENGTH = 1;
const MAKE_MIN_LENGTH = 4;
const MODEL_MIN_LENGTH = 4;
const YEAR_MIN_RANGE = 1950;
const YEAR_MAX_RANGE = 2050;
const DESCRIPTION_MIN_LENGTH = 1;
const IMAGE_URL_MIN_LENGTH = 1;
const TITLE_MIN_LENGTH = 1;

//  DECORATORS
export const checkEmailMinLength = checkMinLength.bind(null, EMAIL_MIN_LENGTH);
export const checkPasswordMinLength = checkMinLength.bind(null, PASSWORD_MIN_LENGTH);
export const checkUsernameMinLength = checkMinLength.bind(null, USERNAME_MIN_LENGTH);
export const checkGenderMinLength = checkMinLength.bind(null, GENDER_MIN_LENGTH);
export const checkTitleMinLength = checkMinLength.bind(null, TITLE_MIN_LENGTH);
export const checkImageUrlMinLength = checkMinLength.bind(null, IMAGE_URL_MIN_LENGTH);



export const checkMakeMinLength = checkMinLength.bind(null, MAKE_MIN_LENGTH);
export const checkModelMinLength = checkMinLength.bind(null, MODEL_MIN_LENGTH);

export const checkYearRange = checkRange.bind(null, YEAR_MIN_RANGE, YEAR_MAX_RANGE);
export const checkDescriptionMinLength = checkMinLength.bind(null, DESCRIPTION_MIN_LENGTH);
export const checkPricePositive = checkMinValue.bind(null, 0);

