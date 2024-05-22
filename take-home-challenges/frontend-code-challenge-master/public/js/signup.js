document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName
    };

    fetch('/users', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('message').textContent = 'Registration successful!';
        document.getElementById('registrationForm').reset(); // Reset form after successful registration
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Registration failed!';
    });
});
