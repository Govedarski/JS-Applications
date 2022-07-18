import {pageContainer, sections, showSection} from './sections.js';
import {request} from '../utils/request.js';
import {validateFilled} from '../utils/validators.js';
import {BASE_URL} from '../utils/url.js';


sections.loginSection.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = [...formData.values()].map(x=>x.trim());

    try {
        validateFilled(formValues)

        const user = await request(BASE_URL + 'users/login',
            'post',
            {
                email: formData.get('email'),
                password: formData.get('password')
            });

        sessionStorage.setItem('user', JSON.stringify(user));
        showSection(sections.homePageSection)
    } catch (error) {
        alert(error);
    }

});