import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuSgpg2OhMvmeI2YpND6QDzvOVEw9-pMI",
  authDomain: "monkey-blogging-e4584.firebaseapp.com",
  projectId: "monkey-blogging-e4584",
  storageBucket: "monkey-blogging-e4584.appspot.com",
  messagingSenderId: "655215602828",
  appId: "1:655215602828:web:4486b963f7729b3f20dfa9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
