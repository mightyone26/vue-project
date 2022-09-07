import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDSGHX-SeyR5F8Y787sW4b1DTlpfPG2-Vg",
    authDomain: "islandresort-3de9b.firebaseapp.com",
    projectId: "islandresort-3de9b",
    storageBucket: "islandresort-3de9b.appspot.com",
    messagingSenderId: "2500169733",
    appId: "1:2500169733:web:1aaa7192dd8374ebf8cc6c"
  };

  //init firebase
  initializeApp(firebaseConfig)

  // init services
  const db = getFirestore()
  const auth = getAuth()

  export { db, auth }