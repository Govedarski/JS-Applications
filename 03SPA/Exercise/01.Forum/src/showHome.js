import {renderError} from '../templates/components.js';
import {renderPosts} from '../templates/posts.js';

const PageContainer = document.getElementById('home-view')
const homePage = PageContainer.querySelector('main')
const postsContainer = document.querySelector('.topic-title')
homePage.remove()

export async function showHome() {
    homePage.style.display = 'block'
    PageContainer.replaceChildren(homePage)

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
        const responseData = await response.json()
        if(Object.keys(responseData).length === 0){
            throw Error('No posts to show!')
        }
        renderPosts(Object.values(responseData),postsContainer)
    }catch (err) {
        renderError(err,postsContainer)
    }
}