document.addEventListener('DOMContentLoaded', function() {
    fetch('/users')  // Make sure this matches your server configuration
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('userTableBody');
            data.forEach(user => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = user.id;
                row.insertCell(1).textContent = user.email;
                row.insertCell(2).textContent = user.firstName;
                row.insertCell(3).textContent = user.lastName;
                row.insertCell(4).textContent = user.state;
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            alert('Failed to load user data.');
        });
});
