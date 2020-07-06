import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAaJNZacm69TYypuZOEYFoSDvOU3h7IbsA",
  authDomain: "udemy-clothing-db.firebaseapp.com",
  databaseURL: "https://udemy-clothing-db.firebaseio.com",
  projectId: "udemy-clothing-db",
  storageBucket: "udemy-clothing-db.appspot.com",
  messagingSenderId: "850604228372",
  appId: "1:850604228372:web:d73e414d197a4b4038cc01"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'}); //googple signin popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;