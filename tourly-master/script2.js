document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Here you can add your login logic, like sending data to a server and handling the response
    console.log("Username: " + username + ", Password: " + password);

    // For demonstration purposes, let's assume the login is successful
    // Redirect to index.html after successful login
    window.location.href = "index.html";
});
