<<<<<<< HEAD
const users = {}; // This will hold users info, but in real-world, use a database or external file
let currentUser = null;
let adminLink = "http://default-link.com"; // Default link

// Simple encryption method for passwords (not secure, for learning purposes)
function encryptPassword(password) {
    return btoa(password); // Base64 encoding (basic, not recommended for real apps)
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (users[username] && users[username].password === encryptPassword(password)) {
        currentUser = username;
        checkAdminStatus(username);
    } else {
        alert("Invalid credentials");
    }
}

// Handle registration
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    
    if (!users[username]) {
        users[username] = { password: encryptPassword(password), isAdmin: false }; // Default to regular user
        alert("User registered successfully!");
    } else {
        alert("Username already exists!");
    }
}

// Check if user is admin
function checkAdminStatus(username) {
    if (username === "admin") { // You can replace this with more complex logic
        showAdminInput();
    } else {
        displayLink(adminLink);
    }
}

// Display the link
function displayLink(link) {
    const condoContent = document.getElementById('condoContent');
    condoContent.innerHTML = `The current condo link is: <a href="${link}" target="_blank">${link}</a>`;
}

// Show admin input for link
function showAdminInput() {
    const adminInput = document.getElementById('adminInput');
    adminInput.style.display = 'block';
}

// Save the admin link
function saveLink() {
    const newLink = document.getElementById('adminLink').value;
    if (newLink) {
        adminLink = newLink;
        displayLink(adminLink);
    } else {
        alert("Please enter a valid link.");
    }
}

// On page load, check if user is logged in
window.onload = function() {
    if (currentUser) {
        checkAdminStatus(currentUser);
    }
=======
const users = {}; // This will hold users info, but in real-world, use a database or external file
let currentUser = null;
let adminLink = "http://default-link.com"; // Default link

// Simple encryption method for passwords (not secure, for learning purposes)
function encryptPassword(password) {
    return btoa(password); // Base64 encoding (basic, not recommended for real apps)
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (users[username] && users[username].password === encryptPassword(password)) {
        currentUser = username;
        checkAdminStatus(username);
    } else {
        alert("Invalid credentials");
    }
}

// Handle registration
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    
    if (!users[username]) {
        users[username] = { password: encryptPassword(password), isAdmin: false }; // Default to regular user
        alert("User registered successfully!");
    } else {
        alert("Username already exists!");
    }
}

// Check if user is admin
function checkAdminStatus(username) {
    if (username === "admin") { // You can replace this with more complex logic
        showAdminInput();
    } else {
        displayLink(adminLink);
    }
}

// Display the link
function displayLink(link) {
    const condoContent = document.getElementById('condoContent');
    condoContent.innerHTML = `The current condo link is: <a href="${link}" target="_blank">${link}</a>`;
}

// Show admin input for link
function showAdminInput() {
    const adminInput = document.getElementById('adminInput');
    adminInput.style.display = 'block';
}

// Save the admin link
function saveLink() {
    const newLink = document.getElementById('adminLink').value;
    if (newLink) {
        adminLink = newLink;
        displayLink(adminLink);
    } else {
        alert("Please enter a valid link.");
    }
}

// On page load, check if user is logged in
window.onload = function() {
    if (currentUser) {
        checkAdminStatus(currentUser);
    }
>>>>>>> e0f745ac8eef12413829cbabcd9325cac9d58ebc
};