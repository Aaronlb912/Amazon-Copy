import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6zGIxsJ3OM7evEjGLC2tZJLYWijk1-08",
  authDomain: "fir-ff812.firebaseapp.com",
  projectId: "fir-ff812",
  storageBucket: "fir-ff812.appspot.com",
  messagingSenderId: "765654820621",
  appId: "1:765654820621:web:7765950fe1e9c1b7cab244",
  measurementId: "G-39SWC6N11E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth();

export { db, auth };
