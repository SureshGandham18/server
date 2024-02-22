
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBShkAV3KBwXJXtKFBbI0VUgN4-229x98U",
    authDomain: "disney-clone-7c7e4.firebaseapp.com",
    projectId: "disney-clone-7c7e4",
    storageBucket: "disney-clone-7c7e4.appspot.com",
    messagingSenderId: "742541553867",
    appId: "1:742541553867:web:5dc57185d923a34f292b4e",
    measurementId: "G-6PM1DKYVPZ"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

