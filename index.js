// validate email
const email = document.querySelector("#form input[type=email]");
const validacionEmail = document.querySelector("#validacion-email");

email.onkeyup = function() {
  if (/\S+@\S+\.\S+/.test(email.value)) {
    validacionEmail.innerText = "";
    email.classList.remove("invalid");
    email.classList.add("valid");
  } else {
    const texto = "The email is invalid.";
    validacionEmail.innerText = texto;
    validacionEmail.style.color = "red";
    email.classList.remove("valid");
    email.classList.add("invalid");
  }
};

// validate password
const password = document.querySelector("#form input[type=password]");
const validacionPassword = document.querySelector("#validacion-password");

password.onkeyup = function() {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  if (regex.test(password.value)) {
    validacionPassword.innerText = "";
    password.classList.remove("invalid");
    password.classList.add("valid");
  } else {
    const texto =
      "At least 8 characters with 1 uppercase, one lowercase, one number.";
    validacionPassword.innerText = texto;
    password.classList.remove("valid");
    password.classList.add("invalid");
  }
};

// show password
const togglePassword = document.querySelector("#mostrar-password input");

togglePassword.onchange = function() {
  // if (password.type === "password") {
  //   password.type = "text";
  // } else {
  //   password.type = "password";
  // }

  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
};

// submit form if there are not errors
const form = document.querySelector("#form form");
let emailValid = false;
let passwordValid = false;

form.onsubmit = function(e) {
  e.preventDefault();

  // if (password.classList.contains("valid")) {
  //   passwordValid = true;
  // } else {
  //   password.classList.add("invalid");
  // }

  // if (email.classList.contains("valid")) {
  //   emailValid = true;
  // } else {
  //   email.classList.add("invalid");
  // }

  // if (emailValid && passwordValid) {
  //   form.submit();
  // }

  password.classList.contains("valid")
    ? (passwordValid = true)
    : password.classList.add("invalid");

  email.classList.contains("valid")
    ? (emailValid = true)
    : email.classList.add("invalid");

  emailValid && passwordValid ? form.submit() : false;
};
