// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCIH_DfM3g335LNNPnT0tA6s0oSfdPpuJQ",
  authDomain: "notate-599b5.firebaseapp.com",
  projectId: "notate-599b5",
  storageBucket: "notate-599b5.appspot.com",
  messagingSenderId: "316248793583",
  appId: "1:316248793583:web:95e8113298fcc476e2561a",
  measurementId: "G-CW9CLCNEKD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);