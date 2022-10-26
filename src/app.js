// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpIrAG5u94GythyJu9nf1JyYk0-kb5H3c",
  authDomain: "corvus-hcstrix.firebaseapp.com",
  projectId: "corvus-hcstrix",
  storageBucket: "corvus-hcstrix.appspot.com",
  messagingSenderId: "1081625506958",
  appId: "1:1081625506958:web:7be317c2b598e1039d45df",
  measurementId: "G-7PB5HJM0M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

