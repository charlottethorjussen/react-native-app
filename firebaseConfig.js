// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-pDWwngBY3eNtR93TM6gsfJmlwyEoRWk",
  authDomain: "awesome-7086e.firebaseapp.com",
  projectId: "awesome-7086e",
  storageBucket: "awesome-7086e.appspot.com",
  messagingSenderId: "102760445018",
  appId: "1:102760445018:web:f87aa270cf5a9e1ce0d463",
  measurementId: "G-N5P16F0JGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);