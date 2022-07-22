import {html} from 'https://unpkg.com/lit-html?module';

export function dashboardHTML(data, event) {
    return html`
        <div id="dashboard-holder" @click="${event}">
        ${data.length
                ? dashboardContentHTML(data)
                : dashboardNoContentHTML()}
        </div>`;
}

function dashboardNoContentHTML() {
    return html`<h1>No ideas yet! Be the first one :)</h1>`;
}

function dashboardContentHTML(data) {
    return html`${ data.map(el=>ideaCardHtml(el)) }`;
}

function ideaCardHtml(data) {
    return html`
        <div  class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${data.title}</p>
            </div>
            <img class="card-image" src="${data.img}" alt="Card image cap">
            <a id = ${data._id} class="btn"  href="">Details</a>
        </div>
    `;
}

