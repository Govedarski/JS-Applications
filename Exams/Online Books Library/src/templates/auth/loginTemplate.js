export const loginTemplate = (ctx, onSubmit) => ctx.lit.html`
<section id="login-page" class="login" @submit = ${onSubmit}>
    <form id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`;