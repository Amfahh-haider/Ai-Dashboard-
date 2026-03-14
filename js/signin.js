// js/signin.js

// Particle network animation setup
function initParticles() {
    // Particle initialization logic here
}

// Functionality to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    toggleButton.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        toggleButton.textContent = type === 'password' ? 'Show' : 'Hide';
    });
}

// Handling form submission
function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulated sign in process
    if (email === "user@example.com" && password === "password") {
        showToast("Sign in successful!");
    } else {
        showToast("Invalid credentials. Please try again.");
    }
}

// Function to show toast notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    togglePasswordVisibility();
    document.getElementById('signInForm').addEventListener('submit', handleSignIn);
});
