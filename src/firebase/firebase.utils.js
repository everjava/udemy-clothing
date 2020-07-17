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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  /*teste lesson
  const collectionRef = firestore.collection('users')
  const collectionSnapshot = await collectionRef.get();
  console.log({collection : collectionSnapshot.docs.map(doc => doc.data())});
  */

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user: " + error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const convertCollectionsSnapshotToMap = collections => {

  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routerName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
   
  //@TODO lesson 168
 return transformedCollection.reduce( ( accumulator, collection ) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {} )


};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //googple signin popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
