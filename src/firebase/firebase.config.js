// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCk6KguiR8JdlIRcgGWq3XYbCUoeIHDFI",
  authDomain: "reacthealthwellnessevents.firebaseapp.com",
  projectId: "reacthealthwellnessevents",
  storageBucket: "reacthealthwellnessevents.appspot.com",
  messagingSenderId: "329367866136",
  appId: "1:329367866136:web:79dd41dc70d71eb1536c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
