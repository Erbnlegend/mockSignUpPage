const submit = document.getElementById('submit');
const error = document.getElementById('error');
const password = document.getElementById('password');
const checkPassword = document.getElementById('checkPassword')


const validation = (e) => {
    e.preventDefault
    const passwordField = password.value;
    const checkPasswordField = checkPassword.value;
    if(typeof passwordField !== "string") {
        error.textContent = "Please re-enter password";
        password.style.borderColor = "#ff0000";
        checkPassword.style.borderColor = "#ff0000";
    }
    else if(passwordField === "" || passwordField === "") {
        error.textContent = "Please enter your password";
        password.style.borderColor = "#ff0000";
        checkPassword.style.borderColor = "#ff0000";
    }
    else if(passwordField !== checkPasswordField) {
        error.textContent = "Passwords do not match!";
        password.style.borderColor = "#ff0000";
        checkPassword.style.borderColor = "#ff0000";
    }
    else if(passwordField === checkPasswordField) {
        error.textContent = "Match!";
        password.style.borderColor = "#34515B";
        checkPassword.style.borderColor = "#34515B";
    }
}

submit.addEventListener('click', validation);