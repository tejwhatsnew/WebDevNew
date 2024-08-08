document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (username === '' || password === '') {
            alert('Please fill in both fields.');
        } else {
            alert(`Username: ${username}\nPassword: ${password}`);
        }
    });
});