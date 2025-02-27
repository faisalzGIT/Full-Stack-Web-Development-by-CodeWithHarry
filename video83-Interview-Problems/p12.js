// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.
// Function to set the authentication token in localStorage with an expiration time
function setAuthToken(token, expirationInMinutes) {
    const currentTime = new Date().getTime(); // Get the current time in milliseconds
    const expirationTime = currentTime + expirationInMinutes * 60 * 1000; // Calculate expiration time

    // Store token and expiration time in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('tokenExpiration', expirationTime);
}



// Example usage:
setAuthToken('abc12345', 30); // Set token with 30-minute expiration

