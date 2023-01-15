import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbyzeZ4MFazS3CxGe8avryp5Dja_pPFnA",
  authDomain: "nextgel.firebaseapp.com",
  projectId: "nextgel",
  storageBucket: "nextgel.appspot.com",
  messagingSenderId: "1087525612835",
  appId: "1:1087525612835:web:eeea40b0ce85bf8f033096",
 // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;
