document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    signInButton.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
});

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting normally (reloading the page)

        // --- Simulated Login Success ---
        console.log('Sign In successful. Redirecting to index.');

        // Redirect to the index page (dashboard)
        window.location.href = INDEX_PAGE_URL;
    });
}

const INDEX_PAGE_URL = 'index';
// Sign Up Form Handler (Activated by the <button type="submit" ...> inside registerForm)
if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop the form from submitting normally (reloading the page)

        // --- Simulated Registration Success ---
        console.log('Sign Up successful. Redirecting to index.');

        // Redirect to the index page (dashboard)
        window.location.href = INDEX_PAGE_URL;
    });
}