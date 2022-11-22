// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAk4-JFithAkGZOzctYto1r77ptwGh5O_k",
    authDomain: "cafeteria-website-9fb09.firebaseapp.com",
    projectId: "cafeteria-website-9fb09",
    storageBucket: "cafeteria-website-9fb09.appspot.com",
    messagingSenderId: "712936557612",
    appId: "1:712936557612:web:b44c79032b09a146ced589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);