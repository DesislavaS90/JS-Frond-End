function passwordValidator(password) {
    let passwordLength = password.length;
    let isLengthValid = passwordLength >= 6 && passwordLength <= 10;
    let isAlphanumeric = /^[A-Za-z0-9]+$/.test(password);
    let hasMinTwoDigits = password.match(/[0-9]{2,}/g) ;

    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isAlphanumeric) {
        console.log("Password must consist only of letters and digits");
    }

    if (!hasMinTwoDigits) {
        console.log("Password must have at least 2 digits");
    }

    if (isLengthValid && isAlphanumeric && hasMinTwoDigits) {
        console.log("Password is valid");
    }
}

passwordValidator('login');

