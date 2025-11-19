// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxi3QUClJdxuCMe7YjPxgvl_Fus4OgWNs",
  authDomain: "online-job-portal-9d795.firebaseapp.com",
  projectId: "online-job-portal-9d795",
  storageBucket: "online-job-portal-9d795.firebasestorage.app",
  messagingSenderId: "302738510542",
  appId: "1:302738510542:web:6cc38a84f950b46c36b69f",
  measurementId: "G-9ZDHF3052M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export {db};