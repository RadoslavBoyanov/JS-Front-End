function passwordValidator(pass){
    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
      }

    function lettersAndTwoDigits(sting){
        return /^(?=(.*\d){2})[a-zA-Z0-9]*$/.test(sting);
    }
      
    if(pass.length < 6 || pass.length > 10){
      console.log("Password must be between 6 and 10 characters");
    }
    if(onlyLettersAndNumbers(pass) === false){
        console.log("Password must consist only of letters and digits");
    }
    if(lettersAndTwoDigits(pass) === false){
        console.log("Password must have at least 2 digits");
    }
    if(lettersAndTwoDigits(pass) == true && pass.length >= 6 && pass.length <= 10){
        console.log("Password is valid");
    }
}

passwordValidator('MyPass123')
passwordValidator('logIn')
passwordValidator('Pa$s$s')