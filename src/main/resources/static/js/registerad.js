document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('registerForm');

    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add('sign-up-mode');
        });
    }

    if (signInButton) {
        signInButton.addEventListener('click', () => {
            container.classList.remove('sign-up-mode');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = document.getElementById('loginRole').value;
            localStorage.setItem('userRole', role);
            // Also save the name on login, assuming it's pre-filled or not needed
            const name = loginForm.querySelector('input[type="text"]');
            if (name) {
                localStorage.setItem('userName', name.value);
            }
            window.location.href = '/home';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = document.getElementById('role').value;
            const name = signupForm.querySelector('input[type="text"]').value;
            localStorage.setItem('userRole', role);
            localStorage.setItem('userName', name);
            window.location.href = '/home';
        });
    }
});