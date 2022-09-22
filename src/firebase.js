// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyC2M6p5d4q6f7qDtydjLJVGLmclmdExf9M",
  // authDomain: "fashionecommerceproject.firebaseapp.com",
  // projectId: "fashionecommerceproject",
  // storageBucket: "fashionecommerceproject.appspot.com",
  // messagingSenderId: "9068959242",
  // appId: "1:9068959242:web:8beac84492489713c3f1f3",
  // measurementId: "G-TT8LLD4DV6"
  apiKey: "AIzaSyAP6qMy6S-LRBOaMhd6452tikrWQ7OMdm8",
  authDomain: "admin-fashion.firebaseapp.com",
  projectId: "admin-fashion",
  storageBucket: "admin-fashion.appspot.com",
  messagingSenderId: "146598988522",
  appId: "1:146598988522:web:d424d57c5cffa7f7d42593",
  measurementId: "G-255595RTDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);