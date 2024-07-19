// -------------------------- Show Password --------------------------

let togglePassword = document.querySelector("#togglePassword");
let passShow = document.getElementById("pass");
togglePassword.addEventListener("click", function Toggle() {
    if (passShow.type === "password") {
        passShow.type = "text";
    }
    else {
        passShow.type = "password";
    }
    this.classList.toggle("fa-eye");
});

// -------------------------- Local Storage with Remember Me --------------------------

const loginForm = document.getElementById('loginForm');
const rememberMeCheckbox = document.getElementById('remMe');

// Save login Info to local storage
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if (rememberMeCheckbox.checked) {
        localStorage.setItem('email', email);
        localStorage.setItem('pass', password);
        localStorage.setItem('remMe', 'true');
    } else {
        localStorage.removeItem('email');
        localStorage.removeItem('pass');
        localStorage.removeItem('remMe');
    }

    alert('Login Information saved On Local Storage!');
});

// Load saved login Info from local storage
window.onload = function() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('pass');
    const rememberMe = localStorage.getItem('remMe') === 'true';

    if (savedEmail && savedPassword && rememberMe) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('pass').value = savedPassword;
        rememberMeCheckbox.checked = true;
    }
}

