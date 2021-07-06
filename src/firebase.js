import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByLrkfCo3s-j1ShqpneJ3tkO7KOkNj-28",
    authDomain: "clone-8ce48.firebaseapp.com",
    databaseURL: "https://clone-8ce48.firebaseio.com",
    projectId: "clone-8ce48",
    storageBucket: "clone-8ce48.appspot.com",
    messagingSenderId: "201476185956",
    appId: "1:201476185956:web:d500ffb9045cc22ccc6471",
    measurementId: "G-ZYNNETWQ7G"
});

const auth = firebase.auth();

export { auth };