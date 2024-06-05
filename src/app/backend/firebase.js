

// src/app/backend/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtcxcEJDHtcmNT-xrhHRCoxty-9U7Kd-c",
    authDomain: "penos-81130.firebaseapp.com",
    projectId: "penos-81130",
    storageBucket: "penos-81130.appspot.com",
    messagingSenderId: "785867193632",
    appId: "1:785867193632:web:29f234bb454fef558e2b45"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
