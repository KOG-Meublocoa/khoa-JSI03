

  
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth();

      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCoRs8guMFDdjRjvaHgMLgDc45dxWnV06E",
        authDomain: "newpj-43642.firebaseapp.com",
        projectId: "newpj-43642",
        storageBucket: "newpj-43642.appspot.com",
        messagingSenderId: "170128837285",
        appId: "1:170128837285:web:54dde9fd28530be58a1b4c",
        measurementId: "G-4W5J5Y6W4Q",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);


function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.creatUserWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        showUserInfo(user);
    })
    .catch((error) => {
        console.error('Error signing up:', error.message);
    });
}