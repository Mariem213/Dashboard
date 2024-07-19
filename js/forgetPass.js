// -------------------------- Forget Password --------------------------

let box = document.getElementById("forgotPasswordBox");
let closeBtn = document.getElementsByClassName("close-button")[0];
let forgotPasswordLink = document.getElementById("forgotPasswordLink");
let resetPasswordButton = document.getElementById("resetPasswordButton");

forgotPasswordLink.onclick = function () {
    box.style.display = "block";
};

closeBtn.onclick = function () {
    box.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == box) {
        box.style.display = "none";
    }
};

resetPasswordButton.onclick = function () {
    let forgetEmail = document.getElementById("forgotPasswordEmail").value;
    alert("Password reset link sent to " + forgetEmail);
    box.style.display = "none";
    window.location.href = "Login.html";
};