// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9nOtgo5sRSf61lSO8GmkQH3i58cjw8a4",
  authDomain: "cloth-brands.firebaseapp.com",
  projectId: "cloth-brands",
  storageBucket: "cloth-brands.appspot.com",
  messagingSenderId: "898393991695",
  appId: "1:898393991695:web:b63f0ef2c05b75ce7e517a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app