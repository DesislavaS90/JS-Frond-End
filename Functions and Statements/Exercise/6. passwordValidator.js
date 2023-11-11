function passwordValidator(password) {

    let passwordLength = password.length;

    if (passwordLength < 6 || passwordLength > 10){
        console.log("Password must be between 6 and 10 characters");
    }

    if (!password.match(/^[A-Za-z0-9]$/g)){
        console.log("Password must consist only of letters and digits");
    }

    if (!password.match(/[0-9]{2,}/g)){
        console.log("Password must have at least 2 digits");
    }
    else{
        console.log("Password is valid");
    }    
    
}


passwordValidator('Pa$s$s');
