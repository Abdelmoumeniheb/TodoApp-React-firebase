 // Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { Firestore } from "firebase/firestore";
 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCxKMe6FGCq8uGxjMxzJ9vK_YqRjw9pbdo",
  authDomain: "todo-app-react-firebase-6ba62.firebaseapp.com",
  projectId: "todo-app-react-firebase-6ba62",
  storageBucket: "todo-app-react-firebase-6ba62.appspot.com",
  messagingSenderId: "313384379324",
  appId: "1:313384379324:web:f18f3e8a1620ce85f4c1b9",
  measurementId: "G-3BH55C0HFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)