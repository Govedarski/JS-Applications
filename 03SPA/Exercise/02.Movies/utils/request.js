import {validateResponse} from './validators.js';

export async function request(targetUrl, method = 'get', body = {}, headers = {}) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    };

    options.method = method;
    Object.entries(headers).forEach(([key, value]) => options.headers[key] = value);
    if (Object.keys(body).length > 0) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(targetUrl, options);
    const responseData = await response.json();

    validateResponse(response, responseData.message)

    return responseData;

}