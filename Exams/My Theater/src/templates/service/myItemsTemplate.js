const itemCardTemplate = (ctx, data) => ctx.lit.html`
        <div class="eventBoard">
            <div class="event-info">
                <img src="${data.imageUrl}">
                <h2>${data.title}</h2>
                <h6>${data.date}</h6>
                <a href="/details/${data._id}" class="details-button">Details</a>
            </div>
        </div>
`;

const noContentTemplate = (ctx) => ctx.lit.html`
        <div class="no-events">
            <p>This user has no events yet!</p>
        </div>
`;

export const listContentTemplate = (ctx, data) => ctx.lit.html`

`;


export const myItemsTemplate = (ctx, userData, itemsData) => ctx.lit.html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${userData.email}</h2>
    </div>
    <div class="board">
 ${itemsData.length?ctx.lit.repeat(itemsData, d=>d._id, itemCardTemplate.bind(null, ctx)):noContentTemplate(ctx)}

    </div>
</section>
`;