import {renderPost} from '../templates/posts.js';
import {clear} from '../templates/clear.js';
const homePage = document.querySelector('main')
const [cancelBtn, postBtn] = homePage.querySelectorAll('button');
const inputs = Array.from(homePage.querySelectorAll('input, textarea'));
const postsContainer = homePage.querySelector('.topic-title');


export function addEventListenersHome(e) {
    cancelBtn.addEventListener('click', cancel);
    postBtn.addEventListener('click', post);
}

function cancel(e) {
    e.preventDefault();
    clear(inputs)
}

async function post(e) {
    e.preventDefault();
    const invalidFields = inputs.filter(x => x.value.length === 0);

    try {
        if (invalidFields.length > 0) {
            throw {message: 'This field is required!', invalidFields};
        }
        const createdOn = Date.now();
        const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: inputs[0].value,
                    creator: inputs[1].value,
                    content: inputs[2].value,
                    createdOn
                })
            });
        const responseData = await response.json();
        renderPost(responseData, postsContainer);
        if (!response.ok) {
            throw {message: responseData.message, invalidFields: inputs[2]};
        }
        clear(inputs)
    } catch (e) {
        e.invalidFields.forEach(f => {
            f.placeholder = e.message;
            f.className = 'error';
            f.style.color = 'black'
        });
    }

}


