function validate() {
    let email = document.getElementById('email');

    email.addEventListener('change', checkEmail);

    function checkEmail(event) {
        currentEmail = event.currentTarget;

        let validator = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (!validator.test(currentEmail.value)) {
            email.classList.add('error');
        }else{
            email.classList.remove('error');
        }
    }
}

