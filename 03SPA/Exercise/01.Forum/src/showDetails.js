import {renderError} from '../templates/components.js';
import {renderPost, renderPostDetails, renderPosts} from '../templates/posts.js';
import {renderComment, renderComments} from '../templates/comments.js';
import {clear} from '../templates/clear.js';

const PageContainer = document.getElementById('home-view')
const detailsPage = PageContainer.querySelector('div.theme-content')
const commentSection = detailsPage.querySelector('div.comment')
const postDetailsContainer = commentSection.querySelector('div.header')
const pageHeader = document.querySelector('.theme-name>h2')
const inputs = Array.from(detailsPage.querySelectorAll('input, textarea'));
detailsPage.remove()

export async function showDetails(postId) {
    window.location='#top'
    pageHeader.textContent = 'Loading...'
    pageHeader.className = ''
    pageHeader.id = ''
    detailsPage.style.display = 'block'
    PageContainer.replaceChildren(detailsPage)

    try {
        const postResponse = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/'+postId)
        const postData =  await postResponse.json()

        if(!postResponse.ok){
            throw Error(postData.message)
        }

        pageHeader.textContent = postData.title
        pageHeader.id = postData._id
        renderPostDetails(postData,postDetailsContainer)
        commentSection.replaceChildren(postDetailsContainer)

        const commentResponse = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments/')
        const commentData =  Object.values(await commentResponse.json())

        if(!commentResponse.ok){
            throw Error(commentData.message)
        }
        const comments =  Object.values(commentData).filter(c => c.toPost === postId)
        renderComments(comments, commentSection)


    }catch (err) {
        pageHeader.textContent = err
        pageHeader.className = 'error'
    }
}

detailsPage.querySelector('form').addEventListener('submit', async (e)=>{
    e.preventDefault()
    const invalidFields = inputs.filter(x => x.value.length === 0);

    try{
        if (invalidFields.length > 0) {
            throw {message: 'This field is required!', invalidFields};
        }
        const createdOn = Date.now();
        const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    toPost: pageHeader.id,
                    creator: inputs[1].value,
                    content: inputs[0].value,
                    createdOn
                })
            });

        const responseData = await response.json();
        renderComment(responseData, commentSection);

        if (!response.ok) {
            throw {message: responseData.message, invalidFields: inputs[0]};
        }
        clear(inputs)
    }catch (e) {
        alert(e)
        e.invalidFields.forEach(f => {
            f.placeholder = e.message;
            f.className = 'error';
            f.style.color = 'black'
        });
    }
})