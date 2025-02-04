

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqOpL661-jHGsieWFdqjbAodjb-YfKOvg",
  authDomain: "react-web-demo-26aeb.firebaseapp.com",
  projectId: "react-web-demo-26aeb",
  storageBucket: "react-web-demo-26aeb.firebasestorage.app",
  messagingSenderId: "60889232395",
  appId: "1:60889232395:web:90e66f9129a8763661430e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)