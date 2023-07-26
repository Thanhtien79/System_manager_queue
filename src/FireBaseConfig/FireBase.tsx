// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG53scvJBWl-ypRcsf4nmsBcoA7_ZV1_8",
  authDomain: "systemqueque-6e2ea.firebaseapp.com",
  projectId: "systemqueque-6e2ea",
  storageBucket: "systemqueque-6e2ea.appspot.com",
  messagingSenderId: "1064440421747",
  appId: "1:1064440421747:web:20b8a3ebabc36393f1b906",
  measurementId: "G-F9N0JK78XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
