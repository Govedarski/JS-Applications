import {createSubmitHandler, getElementWithId} from '../../util.js';


const section = document.getElementById('editView');
const form = section.querySelector('form');
createSubmitHandler(form, onSubmit);
section.remove();
let ctx = null;

export function showEdit(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onSubmit({title}) {
    await ctx.request.put('/data/movies/' + getElementWithId(ctx.target).id,{title})
    ctx.goTo('catalogBtn')
}