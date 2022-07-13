function attachEvents() {
    const [buttonLoad, buttonCreate] = document.querySelectorAll('button');
    const [inputPerson, inputPhone] = document.querySelectorAll('input');
    const phoneBookList = document.getElementById('phonebook');

    buttonLoad.addEventListener('click', async (e) => {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/phonebook');
            const responseData = await response.json();
            checkResponse(response.ok, responseData.message)

            phoneBookList.replaceChildren()
            Object.values(responseData).forEach(record =>{
                const currentItem = document.createElement('li')
                currentItem.id = record._id
                currentItem.textContent = `${record.person}: ${record.phone}`
                const buttonDelete = document.createElement('button')
                buttonDelete.textContent = 'Delete'
                currentItem.appendChild(buttonDelete)
                phoneBookList.appendChild(currentItem)
            })

        } catch (err) {
            alert(err);
        }
    });

    buttonCreate.addEventListener('click', async (e) => {
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/phonebook`,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        person: inputPerson.value,
                        phone: inputPhone.value
                    })
                });
            const responseData = await response.json();
            checkResponse(response.ok, responseData.message)

            console.log(responseData)
        } catch (err) {
            alert(err);
        }
    });

    phoneBookList.addEventListener('click',async (e)=>{
        if(e.target.tagName.toLowerCase() !== 'button') return;
        const currentItem = e.target.parentElement
        console.log(currentItem.id)
        try {
            const response = await fetch('http://localhost:3030/jsonstore/phonebook/'+currentItem.id,
                {method:'delete'})
            const responseData = await response.json()
            checkResponse(response.ok, responseData.message)
            currentItem.remove()

        } catch (err) {
            alert(err)
        }
    })

    function checkResponse(ok, message){
        if (!ok) {
            throw Error(message);
        }
    }
}

attachEvents();