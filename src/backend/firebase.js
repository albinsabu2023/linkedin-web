import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCpU3hxxnuZ80FWZU8twsVY2MgNGbNMP-Q",
  authDomain: "linkedin-26dbc.firebaseapp.com",
  projectId: "linkedin-26dbc",
  storageBucket: "linkedin-26dbc.appspot.com",
  messagingSenderId: "160715894553",
  appId: "1:160715894553:web:5bcf248d85fe23fcc4df88",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };