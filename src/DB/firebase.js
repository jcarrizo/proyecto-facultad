import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAuBcK9gzW0QEF-J6ZDVf2cutRp7p83c",
  authDomain: "proyecto-facultad-f31a4.firebaseapp.com",
  databaseURL: "https://proyecto-facultad-f31a4-default-rtdb.firebaseio.com",
  projectId: "proyecto-facultad-f31a4",
  storageBucket: "proyecto-facultad-f31a4.appspot.com",
  messagingSenderId: "1089277790918",
  appId: "1:1089277790918:web:4375d865b6149d7c3fa5c7",
  measurementId: "G-K66QBXXYW1",
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();