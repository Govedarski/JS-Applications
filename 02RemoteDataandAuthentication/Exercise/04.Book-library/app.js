const tbody = document.querySelector('tbody');
const formTitle = document.querySelector('form>h3')
const buttonSubmit = document.querySelector('form>button')
const [titleInput, authorInput] = document.querySelectorAll('form>input')

document.getElementById('loadBooks').addEventListener('click', showBooks);
async function showBooks(){
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books');
        const responseData = await response.json();

        const container = new DocumentFragment();
        Object.entries(responseData).forEach(([id, info]) => {
            const currentRow = document.createElement('tr');
            currentRow.id = id;
            const buttonsTd = createAndAppendElementWithAttrs.bind(currentRow)
            ('td', {textContent: info.title})
            ('td', {textContent: info.author})
            ('td', {}, true);
            createAndAppendElementWithAttrs.bind(buttonsTd)
            ('button', {textContent: 'Edit'})
            ('button', {textContent: 'Delete'});
            container.appendChild(currentRow);
        });
        tbody.replaceChildren(container);
    } catch (err) {
        alert(err);
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', addBook);
async function addBook (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
        if ([...formData.values()].some(x => x === '')) {
            throw Error('All fields are required!');
        }

        await fetch(`http://localhost:3030/jsonstore/collections/books`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.get('title'),
                    author: formData.get('author')
                })
            });
        showBooks()

    } catch (err) {
        alert(err);
    }
}

tbody.addEventListener('click', async (e) => {
    if (e.target.tagName.toLowerCase() !== 'button') return;
    const bookId = e.target.parentElement.parentElement.id;
    if (e.target.textContent === 'Edit') {
        return await edit(bookId);
    }
    if (e.target.textContent === 'Delete') {
        return await del(bookId);
    }
});

async function edit(bookId) {
    form.removeEventListener('click',addBook)
    formTitle.textContent = 'Edit FORM'
    buttonSubmit.textContent = 'Save'
    const book = await fetch('http://localhost:3030/jsonstore/collections/books/' + bookId).then(res=>res.json())
    titleInput.value = book.title
    authorInput.value = book.author
    buttonSubmit.addEventListener('click',save)

    async function save(e){
        const formData = new FormData(form)
        e.preventDefault()
        await fetch('http://localhost:3030/jsonstore/collections/books/' + bookId,
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.get('title'),
                    author: formData.get('author')
                })
            });
        form.addEventListener('submit',addBook)
        buttonSubmit.removeEventListener('click',save)
        formTitle.textContent = 'FORM'
        buttonSubmit.textContent = 'Submit'
        showBooks()
    }
}

async function del(bookId) {
    await fetch('http://localhost:3030/jsonstore/collections/books/' + bookId,
        {method: 'delete'});
    showBooks()
}

function createAndAppendElementWithAttrs(elementName, kwargs, returnElement = false,) {
    const el = document.createElement(elementName);
    for (const attr in kwargs) {
        kwargs[attr] === 'classList'
            ? kwargs[attr].forEach(klass => el.className.add(klass))
            : el[attr] = kwargs[attr];
    }
    this.appendChild(el);
    return returnElement ? el : createAndAppendElementWithAttrs.bind(this);
}