document.addEventListener("DOMContentLoaded", () => {
    // You can add any interactivity or animations for the buttons here
    const signUpButton = document.querySelector('.animated-btn:nth-child(1)');
    const loginButton = document.querySelector('.animated-btn:nth-child(2)');
    
    signUpButton.addEventListener('click', () => {
      // Add any desired functionality for the Sign Up button here
      console.log('Redirecting to Sign Up page...');
    });
  
    loginButton.addEventListener('click', () => {
      // Add any desired functionality for the Login button here
      console.log('Redirecting to Login page...');
    });
  });
  