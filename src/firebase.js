import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKPQDO7TyBxuSOt_PNsXBEDUDhsxgrOhM",
  authDomain: "vaungsophal-dev.firebaseapp.com",
  projectId: "vaungsophal-dev",
  storageBucket: "vaungsophal-dev.firebasestorage.app",
  messagingSenderId: "634340056280",
  appId: "1:634340056280:web:28443145cf185a45264bad",
  // measurementId: "G-7E5SR0G5XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };