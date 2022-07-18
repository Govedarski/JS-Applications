import {pageContainer, sections, showSection} from './sections.js';
import {PASSWORD_MIN_LENGTH, validateFilled, validateMinLength, validatePasswordMatch} from '../utils/validators.js';
import {request} from '../utils/request.js';
import {BASE_URL} from '../utils/url.js';

sections.registerSection.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = [...formData.values()].map(x => x.trim());

    try {
        validateFilled(formValues);
        const [email, password, password1] = formValues;

        validateMinLength(password, PASSWORD_MIN_LENGTH);
        validatePasswordMatch(password, password1);

        await request(
            BASE_URL + 'users/register',
            'post',
            {email, password}
        );
        const user = await request(BASE_URL + 'users/login',
            'post',
            {email, password});

        sessionStorage.setItem('user', JSON.stringify(user));
        showSection(sections.homePageSection);

    } catch (error) {
        alert(error);
    }
});
