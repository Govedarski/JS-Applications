import {getElementWithId} from '../../util.js';

export async function onDelete(ctx) {
    const confirmed = confirm('Are you sure you want to delete this movie?');
    if (!confirmed) return;

    const element = getElementWithId(ctx.target);
    await ctx.request.del('/data/movies/'+element.id);
    element.remove();
}