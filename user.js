// Frontend-only user management (no backend)
// Store user data in localStorage

// Signup form handler
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const userData = {
        full_name: formData.get('full_name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        password: formData.get('password'),
        college_name: formData.get('college_name'),
        gender: formData.querySelector('input[name="gender"]:checked')?.value
    };
    
    // Store in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    alert('Account created successfully!');
    updateAuthUI();
    
    // Close modal
    const modal = this.closest('.modal') || this.closest('[id$="-modal"]');
    if (modal) {
        modal.classList.add('hidden');
    }
});

// Login form handler
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Check users in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login successful!');
        updateAuthUI();
        
        // Close modal
        const modal = this.closest('.modal') || this.closest('[id$="-modal"]');
        if (modal) {
            modal.classList.add('hidden');
        }
    } else {
        alert('Invalid email or password');
    }
});

// Update auth UI
function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const navItems = document.querySelectorAll('#my-navbar, .flex.items-center.space-x-4');
    
    navItems.forEach(nav => {
        if (nav && currentUser) {
            const authLinks = nav.querySelectorAll('a[href="#"]');
            if (authLinks.length >= 2) {
                nav.innerHTML = `
                    <span class="text-gray-700 flex items-center space-x-1">
                        <i class="fas fa-user"></i>
                        <span>${currentUser.full_name}</span>
                    </span>
                    <span class="text-gray-300">|</span>
                    <a href="#" onclick="logout()" class="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </a>
                `;
            }
        }
    });
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    alert('Logged out successfully!');
    location.reload();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateAuthUI);
updateAuthUI();
