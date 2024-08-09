import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE7gBkDsCFE5bAjOFpDas2K3m_v853xxI",
  authDomain: "blog-website-b4f81.firebaseapp.com",
  projectId: "blog-website-b4f81",
  storageBucket: "blog-website-b4f81.appspot.com",
  messagingSenderId: "688609229043",
  appId: "1:688609229043:web:ea94ff77601baa17b21f86",
  measurementId: "G-H0PJL3FK4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const Provider = new GoogleAuthProvider();

