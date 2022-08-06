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

export function checkPasswordMatch(rePass, password) {
    if (rePass !== password) {
        throw Error('Password mismatched!');
    }
}

function checkIsInList(list, value, fieldName){
    if(!(list.includes(value))){
        throw Error(`${fieldName} must be one of the following: ${list.join(', ')}`)
    }
}

// CONSTANTS

const CATEGORY_LIST = ["JavaScript", "C#", "Java", "Python"]

export const checkIsFilled = checkMinLength.bind(null, 1);
export const checkCategory = checkIsInList.bind(null, CATEGORY_LIST)
