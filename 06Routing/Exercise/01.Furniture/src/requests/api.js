import {getUserData} from '../utils.js';
import {endpoints} from './endpoints.js';

const HOST = 'http://localhost:3030';

async function api(method, url, data) {
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
        alert(err.message);
        throw err;
    }
}

export async function request(endpointName, ...rest) {
    const {pathParams, data} = getArgs(rest)
    const {method, path} = endpoints[endpointName]
    return api(method, path(...pathParams), data)
}

function getArgs(args){
    let pathParams = []
    let data = undefined

    args.forEach(x=>{
        if (typeof x ==='string'){
            pathParams.push(x)
        }else if(typeof x === 'object'){
            data = x
        }
    })

    return {pathParams,data}
}