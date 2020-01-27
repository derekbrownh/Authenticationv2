import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBwmgMDamSRl27I9iyyqddJAmnTziTo-qc",
  authDomain: "authentification2-e3a54.firebaseapp.com",
  databaseURL: "https://authentification2-e3a54.firebaseio.com",
  projectId: "authentification2-e3a54",
  storageBucket: "authentification2-e3a54.appspot.com",
  messagingSenderId: "235432959740",
  appId: "1:235432959740:web:8f91a560389eec5d684179",
  measurementId: "G-TT6H3LPH4S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
