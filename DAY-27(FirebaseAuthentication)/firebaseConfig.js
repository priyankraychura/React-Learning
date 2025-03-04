// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYWY_AhDkL6JM1aM21udgnFIqg5AdmqNA",
  authDomain: "react-learning-615be.firebaseapp.com",
  projectId: "react-learning-615be",
  storageBucket: "react-learning-615be.firebasestorage.app",
  messagingSenderId: "608456947376",
  appId: "1:608456947376:web:ec6a82e6432e345249ed75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }
