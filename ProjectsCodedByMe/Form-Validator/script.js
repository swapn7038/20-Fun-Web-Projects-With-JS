const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input erroe message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Check email is valid
function isValidEmail(email) {

}


// Event listner 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(username.value);
    //  We get the actual input after submitting 

    if (username.value === '') {
        showError(username, 'username is required');
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'email is required');
    } else {
        showSuccess(email);
    }

    // 
    if (password.value === '') {
        showError(password, 'password is required');
    } else {
        showSuccess(password);
    }

    // 
    if (password2.value === '') {
        showError(password2, 'password2 is required');
    } else {
        showSuccess(password2);
    }

});