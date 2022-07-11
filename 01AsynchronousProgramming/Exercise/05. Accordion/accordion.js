function solution() {
    const mainDiv = document.getElementById('main');
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => response.json())
        .then(data => showArticles(data))
        .catch(err=>console.log(err));


    function showArticles(data) {
        data.forEach(article => {
            const accordionDiv = document.createElement('div');
            accordionDiv.className = 'accordion';
            accordionDiv.innerHTML = renderArticle(article);
            mainDiv.appendChild(accordionDiv);
        });

        function renderArticle(article) {
            return `
            <div class="head">
                <span>${article.title}</span>
                <button class="button" id="${article._id}">More</button>
            </div>
        `;
        }
    }

    mainDiv.addEventListener('click', toggleInfo);

    function toggleInfo(e) {
        if (e.target.tagName.toLowerCase() !== 'button') return;
        const clickedDivAccordion = e.target.parentElement.parentElement;
        const currentInfoDiv = clickedDivAccordion.querySelector('.extra');

        if (!currentInfoDiv) {
            fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + e.target.id)
                .then(res => res.json())
                .then(data => renderInfo(data, e.target.parentElement.parentElement))
                .catch(err=>console.log(err));
            e.target.textContent = 'Less';
            return;
        }

        currentInfoDiv.style.display = currentInfoDiv.style.display === 'block'
            ? 'none'
            : 'block';

        e.target.textContent = e.target.textContent === 'More'
            ? 'Less'
            : 'More';

    }

    function renderInfo(data, parent) {
        parent.innerHTML += `
        <div class="extra">
            <p>${data.content}</p>
        </div>`;
        parent.querySelector('.extra').style.display = 'block';
    }


}