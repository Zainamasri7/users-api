
async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const container = document.querySelector('.profile-container');
    container.innerHTML = users.map(user => `
        <div class="profile-card">
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
            <p><i class="fa-solid fa-phone"></i> ${user.phone}</p>
        </div>
    `).join('');
}

fetchUsers();