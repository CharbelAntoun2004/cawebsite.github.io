// Get form elements
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = 'All fields are required.';
        formMessage.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        return;
    }

    // Success message
    formMessage.textContent = 'Thank you for reaching out! Your message has been sent.';
    formMessage.style.color = 'green';

    // Clear form
    form.reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
