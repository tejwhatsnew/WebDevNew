document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const age = form.age.value.trim();
        const department = form.department.value;

        let errorMessage = '';

        if (name === '') {
            errorMessage += 'Name is required.\n';
        }

        if (email === '') {
            errorMessage += 'Email is required.\n';
        } else if (!validateEmail(email)) {
            errorMessage += 'Invalid email format.\n';
        }

        if (age === '') {
            errorMessage += 'Age is required.\n';
        } else if (isNaN(age) || age <= 0) {
            errorMessage += 'Age must be a positive number.\n';
        }

        if (!department) {
            errorMessage += 'Department is required.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            const messageContainer = document.createElement('div');
            messageContainer.style.color = 'green';
            messageContainer.style.marginTop = '20px';
            messageContainer.textContent = 'Thank you for submitting';
            form.appendChild(messageContainer);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});