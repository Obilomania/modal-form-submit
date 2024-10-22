const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const mainContainer = document.querySelector(".main-container");
const overlay = document.querySelector(".overlay");
const closeForm = document.querySelector(".close");
const loginAccountButton = document.querySelector(".login-account-button");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

loginAccountButton.addEventListener("click", () => {
  mainContainer.style.display = "flex";
  overlay.style.display = "block";
  loginBtn.style.backgroundColor = "#e2e2e2";
});
closeForm.addEventListener("click", () => {
  mainContainer.style.display = "none";
  overlay.style.display = "none";
  registerBtn.style.backgroundColor = "#fff";
});

loginBtn.addEventListener("click", () => {
  loginForm.style.display = "flex";
  registerForm.style.display = "none";
  loginBtn.style.backgroundColor = "#e2e2e2";
  registerBtn.style.backgroundColor = "#fff";
});
registerBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "flex";
  loginBtn.style.backgroundColor = "#fff";
  registerBtn.style.backgroundColor = "#e2e2e2";
});
