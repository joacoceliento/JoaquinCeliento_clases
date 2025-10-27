import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB1CckxN4zyttmfpNSgPZZQNYDCvXjqQNg",
  authDomain: "celiento-firebase.firebaseapp.com",
  projectId: "celiento-firebase",
  storageBucket: "celiento-firebase.firebasestorage.app",
  messagingSenderId: "963892124199",
  appId: "1:963892124199:web:11f782d035f9f3a34d0c02"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();