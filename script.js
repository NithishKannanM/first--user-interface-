document.addEventListener('DOMContentLoaded', function() {
    // Toggle between login and register forms
    const wrapper = document.querySelector('.wrapper');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const closeIcon = document.querySelector('.icon-close');

    // Show register form
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });
    }

    // Show login form
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    // Close form (if you have a close icon)
    if (closeIcon && wrapper) {
        closeIcon.addEventListener('click', function() {
            wrapper.style.display = 'none';
        });
    }

    // Floating label effect (optional, if not handled by CSS)
    document.querySelectorAll('.input-box input').forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('active');
        });
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.classList.remove('active');
            }
        });
    });
});
