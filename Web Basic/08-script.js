document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (username === '' || password === '') {
            alert('Please fill in both fields.');
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
        } else {
            const messageContainer = document.createElement('div');
            messageContainer.style.color = 'green';
            messageContainer.style.marginTop = '20px';
            messageContainer.textContent = 'Thank you for submitting';
            form.appendChild(messageContainer);
        }
    });
});