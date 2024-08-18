import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCv2j0O5-m2mFkLu_HNKVh30UAwrJBU_4w",
  authDomain: "mtin-46024.firebaseapp.com",
  projectId: "mtin-46024",
  storageBucket: "mtin-46024.appspot.com",
  messagingSenderId: "220576475196",
  appId: "1:220576475196:web:def46108d5107a7205fb39",
  measurementId: "G-YMSD475HFW"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export default firebaseApp;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase