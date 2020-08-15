import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZ8Dvzvh4xBV0xdc2h_fTfCJbA-yEUhwk",
  authDomain: "instagram-clone-ff295.firebaseapp.com",
  databaseURL: "https://instagram-clone-ff295.firebaseio.com",
  projectId: "instagram-clone-ff295",
  storageBucket: "instagram-clone-ff295.appspot.com",
  messagingSenderId: "245789737",
  appId: "1:245789737:web:ac604eec9e7f2e10345838",
  measurementId: "G-DLVYNS9R7Q",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
