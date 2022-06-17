import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAE7ShmcWeWH5RboQs6zyNSlfertPVgGmk",
  authDomain: "todolist-6c5e0.firebaseapp.com",
  projectId: "todolist-6c5e0",
  storageBucket: "todolist-6c5e0.appspot.com",
  messagingSenderId: "313563147049",
  appId: "1:313563147049:web:0258a0a6b82fb3226ae538"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };