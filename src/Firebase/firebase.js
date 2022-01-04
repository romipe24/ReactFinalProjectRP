import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDxhjkV0hd75GeaKxwN4W1WY5dot4sWHs0",
  authDomain: "romipeart-d7031.firebaseapp.com",
  projectId: "romipeart-d7031",
  storageBucket: "romipeart-d7031.appspot.com",
  messagingSenderId: "897498096373",
  appId: "1:897498096373:web:0a9bc15b978ff4c4fadbbc",
  measurementId: "${config.measurementId}",
});

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}

// export const dataBase = fb.firestore();

// export const getFirestore = () => db.firestore();
