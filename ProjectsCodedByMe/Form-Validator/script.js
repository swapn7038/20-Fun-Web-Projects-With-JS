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


// Check required fields 
function checkRequired(inputArr) {
    inputArr.forEach(function(inout) {
        if (input, value.trim() === '') {
            showError(input, 'is required ');
        } else {
            showSuccess(input);
        }
    });
}

// Event listner 
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

});