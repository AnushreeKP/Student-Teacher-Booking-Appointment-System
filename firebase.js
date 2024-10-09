// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu9vJyeCYY_axkqaTNAGl3ZnI7GbIcoUw",
  authDomain: "student-teacher-booking-3e468.firebaseapp.com",
  projectId: "student-teacher-booking-3e468",
  storageBucket: "student-teacher-booking-3e468.appspot.com",
  messagingSenderId: "558960360467",
  appId: "1:558960360467:web:1a1eca6bffde09f14413e6",
  measurementId: "G-QK5BYCRZHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
