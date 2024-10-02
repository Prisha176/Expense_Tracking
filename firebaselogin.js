// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4hT5wDJ3_tJVTC2vnNgP5rLmNLAw1Yc",
  authDomain: "expense-641ff.firebaseapp.com",
  projectId: "expense-641ff",
  storageBucket: "expense-641ff.appspot.com",
  messagingSenderId: "402746622874",
  appId: "1:402746622874:web:cc8d4da09de0c199747023",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Login function - Triggered when the login button is clicked
document.getElementById('loginBtn').addEventListener('click', (event) => {
  event.preventDefault();  // Prevent form submission

  // Get the email and password from the input fields
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Authenticate the user using Firebase
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      const user = userCredential.user;
      console.log('Login successful!', user);

      // Redirect the user to another page after successful login
      window.location.href = 'home1.html';  // Change this URL to where you want to redirect
    })
    .catch((error) => {
      // Handle login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error logging in:', errorCode, errorMessage);
      alert('Login failed. Please check your credentials and try again.');
    });
});
