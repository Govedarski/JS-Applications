import {createSubmitHandler} from '../../util.js';
import * as validators from '../../validators.js';

export function createView(ctx) {
    ctx.render.create();
    const form = document.querySelector('form')
    createSubmitHandler(form, onSubmit.bind(null, ctx));
    form.querySelector('#inputURL').addEventListener('change',loadPicture)
}

async function onSubmit(ctx, {title, description, imageURL}) {
    const errors = validators.validate([
        validators.validateTitleMinLength.bind(null, title),
        validators.validateDescriptionMinLength.bind(null, description),
        validators.validateImageMinLength.bind(null, imageURL),
    ]);

    if(errors.length){
        return alert(errors.join('\n'))
    }

    await ctx.request.post(
        '/data/ideas',
        {title,description, img:imageURL}
    )

    ctx.goTo('dashboard')
}

function loadPicture(e) {
    console.log('picture')
    const image = document.querySelector('img.create')
    image.src = e.target.value
}