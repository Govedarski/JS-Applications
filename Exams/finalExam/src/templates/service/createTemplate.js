export const createTemplate = (ctx, onSubmit) => ctx.lit.html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form class="create-form" @submit="${onSubmit}">
            <input
                    type="text"
                    name="title"
                    id="job-title"
                    placeholder="Title"
            />
            <input
                    type="text"
                    name="imageUrl"
                    id="job-logo"
                    placeholder="Company logo url"
            />
            <input
                    type="text"
                    name="category"
                    id="job-category"
                    placeholder="Category"
            />
            <textarea
                    id="job-description"
                    name="description"
                    placeholder="Description"
                    rows="4"
                    cols="50"
            ></textarea>
            <textarea
                    id="job-requirements"
                    name="requirements"
                    placeholder="Requirements"
                    rows="4"
                    cols="50"
            ></textarea>
            <input
                    type="text"
                    name="salary"
                    id="job-salary"
                    placeholder="Salary"
            />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;