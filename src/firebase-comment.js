import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVrQcCQLcl5xScpQHg-74En7uIM9NQFgE",
    authDomain: "commenter-portfolio.firebaseapp.com",
    projectId: "commenter-portfolio",
    storageBucket: "commenter-portfolio.firebasestorage.app",
    messagingSenderId: "842784406088",
    appId: "1:842784406088:web:d90de9c87016a43824367d",
    // measurementId: "G-JTYYN6SDQM"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };