document.getElementById("registerGroupForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const groupData = {
      groupName: document.getElementById("groupName").value,
      location: document.getElementById("location").value,
      groupId: document.getElementById("groupId").value,
      phone: document.getElementById("phone").value
    };
  
    const response = await fetch('/api/register-group', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(groupData)
    });
  
    const result = await response.json();
    if (result.success) {
      alert("Registration successful! OTP sent for verification.");
      window.location.href = 'admin-login.html';
    } else {
      alert(result.message);
    }
  });
  