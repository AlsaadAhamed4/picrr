import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzsUFnd6N9Y9Wj-HbE9Q1xq8xPqL64O-I",
    authDomain: "picrr-dece5.firebaseapp.com",
    databaseURL: "https://picrr-dece5.firebaseio.com",
    projectId: "picrr-dece5",
    storageBucket: "picrr-dece5.appspot.com",
    messagingSenderId: "452696587558",
    appId: "1:452696587558:web:e56b7a896e34adec4e15e7",
    measurementId: "G-57EMMW2ZDY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database } 