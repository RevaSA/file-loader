import 'firebase/storage'
import firebase from 'firebase/app'

firebase.initializeApp({
    apiKey: "AIzaSyD-u7_FvojBbGeKdPSqwIDl6gcXUKw6V9Q",
    authDomain: "file-loader-revasa.firebaseapp.com",
    projectId: "file-loader-revasa",
    storageBucket: "file-loader-revasa.appspot.com",
    messagingSenderId: "133800782771",
    appId: "1:133800782771:web:79292b836a6b2a84b8f9c6"
})

export const storage = firebase.storage()
