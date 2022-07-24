// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfoh3mH7STfsJaPht-qDB2s8TZYRXuugw",
  authDomain: "keeper-b29e4.firebaseapp.com",
  databaseURL: "https://keeper-b29e4-default-rtdb.firebaseio.com",
  projectId: "keeper-b29e4",
  storageBucket: "keeper-b29e4.appspot.com",
  messagingSenderId: "534885630565",
  appId: "1:534885630565:web:72d1a968130b47c5087c8",
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig): getApp();

const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
export {app, db, storage,firebaseConfig, auth};