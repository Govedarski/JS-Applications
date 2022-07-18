import {html, render} from 'https://unpkg.com/lit-html?module';

export function renderPosts(posts, parent) {
    let innerHtml = document.createDocumentFragment();
    for (const post of posts) {
        renderPost(post, innerHtml);
    }
    parent.replaceChildren(innerHtml);
}

export function renderPost(post, parent) {
    const temp = document.createDocumentFragment();
    render(createPost(post), temp);
    parent.appendChild(temp);
}

export function renderPostDetails(post, parent) {
    const temp = document.createDocumentFragment();
    render(createPostDetails(post), temp);
    parent.replaceChildren(temp);
}

function createPost(post) {
    const createdOn = new Date();

    return html`
        <div class="topic-container">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a href="/${post.title}" id="${post._id}" class="normal">
                        <h2>${post.title}</h2>
                    </a>
                    <div class="columns">
                        <div>
                            <p>Date:
                                <time>${createdOn.toUTCString()}</time>
                            </p>
                            <div class="nick-name">
                                <p>Username: <span>${post.creator}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createPostDetails(post) {

    return html`
        <img src="./static/profile.png" alt="avatar">
        <p><span>${post.creator}</span> posted on
            <time>${new Date(post.createdOn).toUTCString()}</time>
        </p>
        <p class="post-content">${post.content}</p>
    `;
}