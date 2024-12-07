document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get values entered by the admin
    const loginId = document.getElementById("loginId").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    // Hardcoded credentials for this example (you can replace this with a backend check)
    const correctId = "admin123";
    const correctPassword = "password123";
  
    // Check if the credentials match
    if (loginId === correctId && loginPassword === correctPassword) {
      // Redirect to the Admin Dashboard if credentials are correct
      window.location.href = "admin-dashboard.html";
    } else {
      // Display error message if login fails
      document.getElementById("responseMessage").textContent = "Invalid credentials, please try again.";
      document.getElementById("responseMessage").style.color = "red";
    }
  });
  