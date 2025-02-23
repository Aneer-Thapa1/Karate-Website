// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe9fUY3SuLzMTPMEsare1PUeYgXwGUwS0",
  authDomain: "vison-martial-art.firebaseapp.com",
  projectId: "vison-martial-art",
  storageBucket: "vison-martial-art.firebasestorage.app",
  messagingSenderId: "943517965997",
  appId: "1:943517965997:web:4359d32eed999c21c1f024",
  measurementId: "G-RHCV5XR5DL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
