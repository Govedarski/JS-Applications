import {html, render} from 'https://unpkg.com/lit-html?module';

export function renderError(err, parent) {
    const innerHTML = html`
        <p class="error">${err}</p>
    `;
    render(innerHTML, parent);
};

