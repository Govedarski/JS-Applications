import {html, render} from 'https://unpkg.com/lit-html?module';

function attachEvents() {
    const buttonLoad = document.getElementById('btnLoadPosts');
    const buttonView = document.getElementById('btnViewPost')
    const selectContainer = document.getElementById('posts')
    const postTitle = document.getElementById('post-title')
    const postBody = document.getElementById('post-body')
    const commentList = document.getElementById('post-comments')

    buttonLoad.addEventListener('click', loadPosts);

    function loadPosts(e) {
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => showOptions(Object.values(data)));
    }

    function showOptions(data) {
        selectContainer.innerHTML = ''
        data.forEach(postData =>{
            selectContainer.innerHTML +=`<option value="${postData.id}">${postData.title}</option>`
        });
    }

    buttonView.addEventListener('click', loadContent)

    function loadContent() {
        const postId = selectContainer.value
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => showPost(Object.values(data)));

        fetch('http://localhost:3030/jsonstore/blog/comments')
            .then(res => res.json())
            .then(data =>{
                data = Object.values(data).filter(x=>x.postId === postId)
                showComments(data)
            })
    }

    function showPost(data) {
        const post = data.find(x=>x.id === selectContainer.value)
        console.log(post)
        postTitle.textContent = post.title
        postBody.textContent = post.body
    }

    function showComments(data) {
        commentList.innerHTML = ''
        console.log(data)
        data.forEach(c=> {
            commentList.innerHTML += `<li id=${c.id}>${c.text}</li>`
        })
    }
}

attachEvents();