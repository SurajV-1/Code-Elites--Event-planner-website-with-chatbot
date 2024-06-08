const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function(){
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function(){
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

document.getElementById('submitSignIn').addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  
    const validEmail = "codeelites@gmail.com";
    const validPassword = "code";

    if (email === validEmail && password === validPassword) {
        alert("Sign in successful!");
       
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
