import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKOvU1mKkbuyFNuJZYQCabFALLPg_Wsr8",
  authDomain: "limpi-ar.firebaseapp.com",
  projectId: "limpi-ar",
  storageBucket: "limpi-ar.appspot.com",
  messagingSenderId: "699523560532",
  appId: "1:699523560532:web:2e5c50748abeb43c4069c1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);