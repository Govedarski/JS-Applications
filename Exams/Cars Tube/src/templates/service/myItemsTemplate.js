// const itemCardTemplate = (ctx, data) => ctx.lit.html`
//         <div class="eventBoard">
//             <div class="event-info">
//                 <img src="${data.imageUrl}">
//                 <h2>${data.title}</h2>
//                 <h6>${data.date}</h6>
//                 <a href="/details/${data._id}" class="details-button">Details</a>
//             </div>
//         </div>
// `;

const noContentTemplate = (ctx) => ctx.lit.html`
<p class="no-cars"> You haven't listed any cars yet.</p>
`;

export const myItemsTemplate = (ctx, userData, itemsData) => ctx.lit.html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">   
        ${itemsData.length
    ?ctx.lit.repeat(itemsData, d=>d._id, ctx.templates.itemCardTemplate.bind(null, ctx, userData))
    :noContentTemplate(ctx)}
    </div>
</section>
`;