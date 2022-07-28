import {getFormData} from '../../utils.js';

const loginTemplate = (ctx, onSubmit) => ctx.html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;

export function loginView(ctx) {
    const template = loginTemplate(ctx, onSubmit.bind(null, ctx));
    ctx.render(template, ctx.main);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const formData = ctx.utils.getFormData(event.target);

    const validationResult = ctx.validators.validateForm(event.target,
        {
            email:[ctx.validators.checkPasswordMinLength],
            password:[ctx.validators.checkEmailMinLength]
        });

    if(validationResult.errorsNumber > 0) return

    const userData = await ctx.request('login', formData);
    ctx.utils.setUserData(sessionStorage, userData);
    ctx.redirect('/');
}