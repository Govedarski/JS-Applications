import {checkOwnerButtons, createBTN, getUserData} from '../../util.js';

const section = document.getElementById('catalogView');
const list = section.querySelector('ul');
section.remove();
let ctx = null

export async function showCatalog(innerCtx) {
    ctx = innerCtx
    ctx.render(section);

    list.replaceChildren('Loading...');

    const movies = await ctx.request.get('/data/movies');

    const fragment = document.createDocumentFragment();

    movies.map(createMovieItem).forEach(c => fragment.appendChild(c));
    checkOwnerButtons(fragment)
    list.replaceChildren(fragment);
}

function createMovieItem(movie) {
    const li = document.createElement('li');
    li.textContent = movie.title;
    li.id = movie._id
    const buttonDelete = createBTN(
        {
            textContent:'Delete',
            href:'#',
            className:"ownerOnly",
            ownerId:movie._ownerId
        },
        {
            type:'click',
            callback(e){
                e.preventDefault()
                ctx.goTo('deleteBtn', {target:e.target})
            }
        })
    const buttonEdit = createBTN(
        {
            textContent:'Edit',
            href:'#',
            className:"ownerOnly",
            ownerId:movie._ownerId
        },
        {
            type:'click',
            callback(e){
                e.preventDefault()
                ctx.goTo('editBtn', {target:e.target})
            }
        })

    li.append(buttonDelete,buttonEdit)
    return li;
}