 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7xueFZlwH7rV3zUxDvn12HTgppNtmcP4",
  authDomain: "doctors-portal-amir.firebaseapp.com",
  projectId: "doctors-portal-amir",
  storageBucket: "doctors-portal-amir.appspot.com",
  messagingSenderId: "695068163905",
  appId: "1:695068163905:web:9bd7da41f153f7ecde2bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;