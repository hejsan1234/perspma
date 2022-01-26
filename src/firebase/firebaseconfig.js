import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const fireApp = initializeApp ({
    apiKey: "AIzaSyDchCZ4Qk-9MftkaYlEoIopWMBoVtADAbo",
    authDomain: "personal-1a79d.firebaseapp.com",
    projectId: "personal-1a79d",
    storageBucket: "personal-1a79d.appspot.com",
    messagingSenderId: "857918305015",
    appId: "1:857918305015:web:c693cbd8f58bbda7a099f2",
    measurementId: "G-QV84L2J5YR"
});


const db = getFirestore();

export { db };