// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkji2yJQgKHJJr8fq_f-ttrX0fXrFwQTI",
  authDomain: "beginagainministries.firebaseapp.com",
  projectId: "beginagainministries",
  storageBucket: "beginagainministries.appspot.com",
  messagingSenderId: "905446226517",
  appId: "1:905446226517:web:6a76a3d71cac317c9b32dc",
  measurementId: "G-7WZGMKRSP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);