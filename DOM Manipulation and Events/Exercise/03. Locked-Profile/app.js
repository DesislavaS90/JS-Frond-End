function lockedProfile() {

    let buttons  = Array.from(document.getElementsByTagName('button'));

    buttons.forEach((button) => {
        button.addEventListener('click', showInfo);
    })

    function showInfo(event) {
        let currentBtn = event.currentTarget;
        let profile = currentBtn.parentElement;
        
        let isUnlocked = profile.querySelector('input[type="radio"][value="unlock"]');
        let profileInfo = profile.querySelector('div > div');

        if (!isUnlocked.checked) {
            return;
        }

        if (currentBtn.textContent === 'Show more') {
            profileInfo.style.display = 'block';
            currentBtn.textContent = 'Hide it';
        } else if (currentBtn.textContent === 'Hide it') {
            profileInfo.style.display = 'none';
            currentBtn.textContent = 'Show more';
        }

    

    }

}