function formValidation() {
    clearerrors();

    var result = validateFirstName();
    result = validateLastName() && result;
    result = validatePassword() && result;
    result = validatePhone() && result;
    result = validateEducation() && result

    return result;
}

function clearerrors() {
    document.querySelector("#errorfname").innerHTML = "";
    document.querySelector("#errorlname").innerHTML = "";
    document.querySelector("#errorpw").innerHTML = "";
    document.querySelector("#errorrpw").innerHTML = "";
    document.querySelector("#errorphone").innerHTML = "";
}

function validateFirstName() {
    var error = document.querySelector("#errorfname");
    var name = document.getElementById("fname");
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var input = name.value.trim();
    var flag = true;

    if (input.length == 0) {
        error.innerHTML += "<p>First name cannot be empty</p>";
        flag = false;
        return flag;
    }

    /*for (var i = 0; i < input.length; i++) {
        if (lettters.indexOf(input.substr(i,1)) >= 0) {
            flag = true;
        }
    }*/

    var capitalInput = input.toUpperCase();
    for (var i = 0; i < capitalInput.length; i++) {
        if (capitalInput.charAt(i) < "A" || capitalInput.charAt(i) > "Z") {
            flag = false;
        }
    }
    if (flag == false) {
        error.innerHTML += "<p>Must use characters A-Z/a-z (' and - are allowed)</p>";
        return flag;
    }
}

function validateLastName() {
    var error = document.querySelector("#errorlname");
    var name = document.getElementById("lname");
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var input = name.value.trim();
    var flag = true;

    if (input.length == 0) {
        error.innerHTML += "<p>Last name cannot be empty</p>";
        flag = false;
        return flag;
    }

    /*for (var i = 0; i < input.length; i++) {
        if (lettters.indexOf(input.substr(i,1)) >= 0) {
            flag = true;
        }
    }*/

    var capitalInput = input.toUpperCase();
    for (var i = 0; i < capitalInput.length; i++) {
        if (capitalInput.charAt(i) < "A" || capitalInput.charAt(i) > "Z") {
            flag = false;
        }
    }
    if (flag == false) {
        error.innerHTML += "<p>Must use characters A-Z/a-z (' and - are allowed)</p>";
        return flag;
    }
}

function validatePassword() {
    var errorpw = document.querySelector("#errorpw");
    var password = document.getElementById("password");
    var pwinput = password.value.trim();
    var errorrpw = document.querySelector("#errorrpw");
    var rpassword = document.getElementById("repassword");
    var rpwinput = rpassword.value.trim();  
    var flag = true;

    if (pwinput.length < 8) {
        errorpw.innerHTML += "<p>Password must be at least 8 characters long</p>";
        flag = false;
        return flag;
    }

    if (pwinput == rpwinput) {
        errorrpw.innerHTML += "<p>Password does not match</p>";
        flag = true;
        return flag;
    } else {
        flag = false;
        return false;
    }

}

function validatePhone() {
    var error = document.querySelector("#errorpw");
    var phone = document.getElementById("password");
    var input = phone.value.trim();

    if (input.length == 0) {
        error.innerHTML += "<p>Phone cannot be empty</p>";
        flag = false;
        return flag;
    }

    if (input.charAt(3) !== '-' || input.charAt(7) !== '-') {
        error.innerHTML += "<p>Phone must be in 999-999-999 format</p>";
    }
}

function validateEducation() {
    for (var i = 0; i < radio.length; i++) {
        if (document.signUp.eduStatus[i].checked == true) {
            return true;
        } else {
            return false;
        }
    }

}