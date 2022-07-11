function lockedProfile() {
    const mainDiv = document.getElementById('main');
    mainDiv.innerHTML = '';

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(data => renderProfiles(data));

    function renderProfiles(data) {
        for (const profileData of Object.values(data)) {
            mainDiv.innerHTML += renderProfile(profileData);
        }
        Array.from(document.querySelectorAll('.user1HiddenFields')).forEach(x => x.style.display = 'none');
    }

    function renderProfile(data) {
        return `
        <div class="profile">
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" checked name="user1Locked" value="lock">
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock"><br><hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${data.username}" disabled readonly />
            <div class="user1HiddenFields">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${data.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user1Age" value="${data.age}" disabled readonly />
            </div>
            <button>Show more</button>
        </div>`;
    }

    mainDiv.addEventListener('click', ToggleInfo);

    function ToggleInfo(e) {
        if (e.target.tagName.toLowerCase() !== 'button') return;
        const profileDiv = e.target.parentElement
        const lockedButton = profileDiv.querySelector('input[value=lock]');
        if (lockedButton.checked) return;
        const hiddenInfo = profileDiv.querySelector('.user1HiddenFields')
        if(hiddenInfo.style.display === 'none'){
            hiddenInfo.style.display = 'block'
        }else{
            hiddenInfo.style.display = 'none'
        }
    }

}