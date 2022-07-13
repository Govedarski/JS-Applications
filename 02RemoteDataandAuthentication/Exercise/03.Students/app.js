const tbody = document.querySelector('tbody');

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
        if ([...formData.values()].some(x => !x.length)) {
            throw Error('All fields are required!');
        }

        await fetch(`http://localhost:3030/jsonstore/collections/students`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'firstName': formData.get('firstName'),
                    'lastName': formData.get('lastName'),
                    'facultyNumber': formData.get('facultyNumber'),
                    'grade': formData.get('grade'),
                })
            });

        const response = await fetch('http://localhost:3030/jsonstore/collections/students');
        const responseData = await response.json();
        const container = new DocumentFragment();
        Object.values(responseData).forEach(studentInfo => {
            const currentTr = document.createElement('tr');
            createAndAppendElementWithAttrs.bind(currentTr)
            ('td', {textContent: studentInfo.firstName})
            ('td', {textContent: studentInfo.lastName})
            ('td', {textContent: studentInfo.facultyNumber})
            ('td', {textContent: studentInfo.grade});
            container.appendChild(currentTr);
        });
        tbody.replaceChildren(container);


    } catch (err) {
        alert(err);
    }

});


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