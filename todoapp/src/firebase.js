// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5ftpEwqDVWPf0HcoKHgSpqXS6RvewDI",
  authDomain: "react-todoapp-ee9f6.firebaseapp.com",
  projectId: "react-todoapp-ee9f6",
  storageBucket: "react-todoapp-ee9f6.appspot.com",
  messagingSenderId: "226512966671",
  appId: "1:226512966671:web:c567edb05924b2a6afbf7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
