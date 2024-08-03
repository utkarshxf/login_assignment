document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            showError('Please fill in all fields.');
            return;
        }

        // Simulating authentication (replace with actual authentication logic)
        if (username === 'user' && password === 'password') {
            // Successful login
            alert('Login successful!');
            // Redirect to restricted content or perform other actions
        } else {
            showError('Invalid username or password.');
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
    }
});