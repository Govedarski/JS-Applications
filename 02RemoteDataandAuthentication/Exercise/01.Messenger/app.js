function attachEvents() {
    const authorInput = document.querySelector('input[name=author]');
    const contentInput = document.querySelector('input[name=content]');
    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const messagesTextarea =document.getElementById('messages')
    const targetUrl = `http://localhost:3030/jsonstore/messenger`
    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        if (authorInput.value === '' || contentInput.value === '') return;
        try {
            const response = await fetch(targetUrl,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        author: authorInput.value,
                        content: contentInput.value
                    })
                });
            const responseData = await response.json()
            if(!response.ok){
                throw Error(responseData.message)
            }
        } catch (err) {
            alert(err)
        }
    });

    refreshButton.addEventListener('click', (e)=>{
        e.preventDefault()
        fetch(targetUrl)
            .then(response => response.json())
            .then(responseData => showPosts(Object.values(responseData)))
            .catch(err => alert(err))

        function showPosts(data) {
            messagesTextarea.value = data.map(postData => `${postData.author}: ${postData.content}`).join('\n')
        }
    })
}

attachEvents();