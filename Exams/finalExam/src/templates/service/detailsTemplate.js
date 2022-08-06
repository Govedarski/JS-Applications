const buttonsTemplate = (ctx, data, userData, isOwner, hasApplied, onDelete) => ctx.lit.html`
        ${isOwner
    ? ctx.lit.html`
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn"  @click="${onDelete}">Delete</a>`
    : null}
        ${!(isOwner || hasApplied)
    ?ctx.lit.html`<a href="/apply/${data._id}" id="apply-btn">Apply</a>`
    :null}

`;


export const detailsTemplate = (ctx, data, userData, isOwner, appliedNumber, hasApplied, onDelete) => ctx.lit.html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${data.imageUrl}" alt="example1" />
        <p id="details-title">${data.title}</p>
        <p id="details-category">
            Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${data.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span
                >${data.description}</span
                >
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                >${data.requirements}</span
                >
            </div>
        </div>
        <p>Applications: <strong id="applications">${appliedNumber}</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
                ${userData
    ?buttonsTemplate(ctx, data, userData, isOwner, hasApplied, onDelete)
    :null}
        </div>
    </div>
</section>
`;

