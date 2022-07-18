import {html, render} from 'https://unpkg.com/lit-html?module';

export function renderComments(comments, parent) {
    const temp = document.createDocumentFragment()
    comments.forEach(c=> renderComment(c,temp))
    parent.appendChild(temp)
}

export function renderComment(comment, parent) {
    const temp = document.createDocumentFragment()
    render(createComment(comment),temp)
    parent.appendChild(temp)
}

function createComment(comment) {
    return html`
        <div id="user-comment">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${comment.creator}</strong> commented on <time>${new Date(comment.createdOn).toUTCString()}</time></p>
                    <div class="post-content">
                        <p>${comment.content}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}