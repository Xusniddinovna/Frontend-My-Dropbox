/** @format */

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

//  Update the config
const firebaseConfig = {
  apiKey: "AIzaSyCpA5uhTbWgygZWxbKgoHTG7g3D_z51HgM",
  authDomain: "dropbox-6b421.firebaseapp.com",
  projectId: "dropbox-6b421",
  storageBucket: "dropbox-6b421.appspot.com",
  messagingSenderId: "256577116411",
  appId: "1:256577116411:web:e887ed3b2cef0a3535b85e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { app, firestore, auth, storage };
