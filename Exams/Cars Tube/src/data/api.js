const HOST = 'http://localhost:3030';

async function api(getUserData, method, url, data, onError) {
    const options = {
        method,
        headers: {},
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData(sessionStorage);
    if (userData != null) {
        options.headers['X-Authorization'] = userData.accessToken;
    }
    console.log(options)
    try {
        const res = await fetch(HOST + url, options);

        if (res.ok == false) {
            const error = await res.json();
            throw Error(error.message);
        }

        if (res.status == 204) {
            return res;
        } else {
            return res.json();
        }
    } catch (err) {
        onError(err.message);
        throw err;
    }
}

export async function request(getUserData, endpoint, ...rest) {
    const {pathParams, data, onError} = getArgs(rest)
    const {method, path} = endpoint
    return api(getUserData, method, path(...pathParams), data, onError)
}

function getArgs(args){
    let pathParams = []
    let data = undefined
    let onError = alert

    args.forEach(x=>{
        if (typeof x ==='string'){
            pathParams.push(x)
        }else if(typeof x === 'object'){
            data = x
        }else if(typeof x === 'function'){
            onError = x
        }
    })

    return {pathParams,data, onError}
}