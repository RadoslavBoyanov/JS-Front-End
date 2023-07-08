function lockedProfile() {
    const buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.addEventListener('click', toggleInformation)
    }

    function toggleInformation(e) {
        let profile = e.target.parentElement;
        let userInfo = profile.querySelector('div');
        let isUnlock = profile.querySelector("input[value =unlock]").checked;

        if (isUnlock && e.target.textContent === 'Show more') {
            userInfo.style.display = 'block';
            e.target.textContent = 'Hide it';
        }else{
            if(isUnlock){
                userInfo.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}