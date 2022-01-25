import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

const firebaseConfig = {
    apiKey: "AIzaSyDchCZ4Qk-9MftkaYlEoIopWMBoVtADAbo",
    authDomain: "personal-1a79d.firebaseapp.com",
    projectId: "personal-1a79d",
    storageBucket: "personal-1a79d.appspot.com",
    messagingSenderId: "857918305015",
    appId: "1:857918305015:web:c693cbd8f58bbda7a099f2",
    measurementId: "G-QV84L2J5YR"
};

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }